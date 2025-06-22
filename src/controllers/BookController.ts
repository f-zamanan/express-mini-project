import { Request, Response, NextFunction } from "express";
import Book from "../models/Book";

// implementing all CRUD methods for AuthorController

// get all books
const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allBook = await Book.find().populate("author category");
    res.json(allBook);
  } catch (error) {
    next(error);
  }
};

// get book by id
const bookrByID = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { bookID } = req.params;
    const foundBook = await Book.findById(bookID).populate("author category");
    res.json(foundBook);
  } catch (error) {
    next(error);
  }
};

// create a new book
const creatBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, authID, bookID } = req.body;
    const newBook = await Book.create({ title, auhtor: authID, books: bookID });
    res.json(newBook);
  } catch (error) {
    next(error);
  }
};

// update book name by id
const updateBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { bookID } = req.params;
    const { title } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(bookID, title);
    res.json(updatedBook);
  } catch (error) {
    next(error);
  }
};

// Delete author by id
const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { bookID } = req.params;
    const deletedBook = await Book.findByIdAndDelete(bookID);
    res.json(deletedBook);
  } catch (error) {
    next(error);
  }
};

export { getAllBooks, bookrByID, creatBook, updateBook, deleteBook };
