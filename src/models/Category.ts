import { model, Schema } from "mongoose";

const catSchema = new Schema(
  {
    name: { type: String, required: true },
    books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);

const Category = model("Category", catSchema);
export default Category;
