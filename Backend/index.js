import express from 'express';
import { createServer as createHttpServer } from "http";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from 'morgan';
import bodyParser from "body-parser";
import router from "./Routes/ContactUsRoute/contactUsRoutes.js";
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Database connected successfully");
    } catch (err) {
        console.error(err);
    }
}

main();

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use("/api/contact", router);

const httpServer = createHttpServer(app);

// Start the server
const httpPort = process.env.PORT || 3000;

httpServer.listen(httpPort, () => {
    console.log(`Server is running on port ${httpPort}`);
});
