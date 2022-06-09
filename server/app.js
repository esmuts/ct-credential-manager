/**
 * IFSL3T35 Capstone Project V: Authentication
 *
 * @author Eckard Smuts
 *
 * I consulted the following sites for help:
 *
 */

// App imports
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { router } from "./routes/jobs.routes.js";

const app = express();

// App middleware

app.use(cors());
app.use(express.json());
app.use("/manage", router);
app.use(helmet());

// App functionality

app.get("/", (req, res) =>
  res.json({ message: "Welcome to Maintenance Manager version 1.0" })
);

export default app;
