import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import {userRouter} from "./routes/user.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
  "mongodb+srv://mahlakametsakabelo:W7YFDwaWlZ6x6ccH@crimeapp.nfzldo7.mongodb.net/?retryWrites=true&w=majority&appName=Crimeapp"
);

app.listen(3001, () => console.log("SERVER STARTED"));