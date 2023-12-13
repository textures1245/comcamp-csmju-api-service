import express from "express";
import mailServiceRoute from "./../routes/mail-service";
import Controller from "../controllers";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [process.env.DEV_LOCAL_PORT ?? "", "https://comcamp.csmju.com"],
  })
); // Enable CORS for all routes
// enable JSON body parser
app.use(bodyParser.json());

// app.use("/api", mailServiceRoute);
app.use("/api", mailServiceRoute);

export default app;
