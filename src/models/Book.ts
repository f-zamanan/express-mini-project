import { model, Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    image: { type: String },
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);

const Book = model("Book", bookSchema);

export default Book;
