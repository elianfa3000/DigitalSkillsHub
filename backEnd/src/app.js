import express from "express";
import authRouth from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(authRouth);
export default app;
