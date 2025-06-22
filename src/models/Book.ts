import { model, Schema } from "mongoose";

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

const Book = model("Book", bookSchema);

export default Book;
