import { timeStamp } from "console";
import { model, Schema } from "mongoose";

const auhtorSchema = new Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);

const Author = model("Author", auhtorSchema);
export default Author;
