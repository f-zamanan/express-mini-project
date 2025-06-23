import {
  getAllBooks,
  bookrByID,
  creatBook,
  updateBook,
  deleteBook,
} from "../controllers/BookController";
import express from "express";

const router = express.Router();

// 1. get all books route
router.get("/", getAllBooks);
// 2. get book by id
router.get("/:bookID", bookrByID);
// 3. create book
router.post("/", creatBook);
// 4. update book name by id
router.put("/:bookID", updateBook);
// 5. delete book by id
router.delete("/:bookID", deleteBook);

export default router;
