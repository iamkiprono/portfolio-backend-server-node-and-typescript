import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import mailRoutes from "./routes/mailer.routes";
import cors from "cors"

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

app.use("/mail", mailRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
