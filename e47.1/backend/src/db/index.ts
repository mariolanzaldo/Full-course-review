import { connection, connect, ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
let reconnecting = false;

export const connectToDB = async () => {
    try {
        const  URL =  process.env.MONGO_URL;

        if(URL) {
            await connect(URL,{useNewUrlParser: true, useUnifiedTopology: true} as ConnectOptions);
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", (error as Error)?.message);
    }
};

connection.on("connecting", () => {
    console.log(`MongoDB connecting...`);
});

connection.on("disconnecting", () => {
    reconnecting = false;
    console.log(`MongoDB disconnecting...`);
});

connection.on(`connected`, () => {
    reconnecting = true;
    console.log(`MongoDB connected`);
    console.log(`MongoDB name: ${connection.name}`);
});

connection.on("disconnected", () => {
    if (!reconnecting) return;

    reconnecting = false;
    console.log(`MongoDB connection lost, reconnecting...`);
    connectToDB();
});

connection.on("error", (err) => {
    console.error(`MongoDB connection failed:`, err);
    setTimeout(connectToDB, 1000);
});