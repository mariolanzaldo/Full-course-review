import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import {createGQLError} from "../errors/utils";
import * as models from "../db/models";
import { GetAuthUser } from "../types";


dotenv.config();

export const getUser: GetAuthUser = async function (req, res) {
    const cookiesHeader = req?.headers.cookie;

    // if(!cookiesHeader) createGQLError({
    //     code: "BAD_REQUEST",
    //     message: "Unauthenticated user",
    // });
    
    const cookies = cookiesHeader?.split(';').reduce((cookies: any, cookie: any) => {
        const [name, value] = cookie.trim().split('=');
        cookies[name] = value;

        return cookies;
    }, {});
    const token = cookies.token;
    
    const secret = process.env.SECRET_TOKEN;

    try {

        if(secret){ 
            const decoded = jwt.verify(token, secret?.toString())  as JwtPayload;
            
            const user = await models.UserModel.find({ _id: decoded._id});
            
            return user;
        }
    } catch (err) {
        console.log(err);
        createGQLError({
            code: "BAD_REQUEST",
            message: "Unauthenticated user",
        });
    }
};

export default getUser;