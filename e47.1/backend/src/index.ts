import express from "express";
import { createServer } from "http";
import { expressMiddleware} from "@apollo/server/express4";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema} from "@graphql-tools/schema";
import cors from "cors";
import resolvers from "./resolvers";
import typeDefs from "./schema";
import * as models from "./db/models";
import User from "./db/models/User/index";

//Subs
import { ApolloServerPluginDrainHttpServer} from "@apollo/server/plugin/drainHttpServer";
import { WebSocketServer} from "ws";
import { useServer} from "graphql-ws/lib/use/ws";
import { connectToDB } from "./db";
import getUser from "./utils/gql.getUser";
import { Employee, GetAuthUser} from "./types";


export interface MyContext {
    req: express.Request;
    res: express.Response;
    UserModel?: typeof User;
    EmployeeModel?: Employee;
    getAuthUser?: GetAuthUser;
}

dotenv.config();

connectToDB();

const app = express();
const httpServer = createServer(app);

const schema = makeExecutableSchema({ typeDefs, resolvers });

const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
});

const serverCleanup = useServer({ schema }, wsServer);

const server = new ApolloServer<MyContext>({
    schema,
    plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer}),
        {
            async serverWillStart() {
                return {
                    async drainServer() {
                        await serverCleanup.dispose();
                    }
                 }
            }
        }
    ]
});

async function start() {
    await  server.start();
//TODO: Context goes here
    app.use("/graphql", cors<cors.CorsRequest>(),bodyParser.json(), expressMiddleware(server, {
        context: async({ req, res}) => {
            const getAuthUser = getUser.bind(null, req, res);
            
            return ({
                req,
                res,
                models,
                getAuthUser,
            });
        }
    }));
    
    
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server ready at port ${PORT}`);
    });
};

start();