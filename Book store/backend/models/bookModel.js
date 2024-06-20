import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        tilte: {
            type: String,
            required: true,
        }
    }
);

export const Book = mongoose.model("Cat", {name: String});