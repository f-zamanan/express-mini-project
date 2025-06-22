import { model, Schema } from "mongoose";

const auhtorSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

const Author = model("Author", auhtorSchema);
export default Author;
