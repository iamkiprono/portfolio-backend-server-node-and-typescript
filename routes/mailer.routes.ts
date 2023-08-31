import express from "express";
import { submitForm } from "../sendMail";

const mailRoutes = express.Router();

mailRoutes.post("/", submitForm);

export default mailRoutes;
