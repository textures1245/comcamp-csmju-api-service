import express from "express";
import mailServiceRoute from "./../routes/mail-service";
import Controller from "../controllers";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// enable JSON body parser
app.use(bodyParser.json());

// app.use("/api", mailServiceRoute);
app.use("/api", mailServiceRoute);

export default app;
