import express from "express";
import path from "path";
import cors from "cors";
import { errors } from "celebrate";
import { config as configDotenv } from "dotenv";

configDotenv();

import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/assets", express.static(path.resolve(__dirname, "..", "assets")));

app.use(errors());

app.listen(3333);
