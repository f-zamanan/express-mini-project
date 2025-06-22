import { model, Schema } from "mongoose";

const catSchema = new Schema({
  name: { type: String, required: true },
  books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
});

const Category = model("Category", catSchema);
export default Category;
