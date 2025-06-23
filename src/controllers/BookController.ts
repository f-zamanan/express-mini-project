import { Request, Response, NextFunction } from "express";
import Book from "../models/Book";
import Author from "../models/Author";
import Category from "../models/Category";
import { Query } from "mongoose";

// implementing all CRUD methods for AuthorController

// get all books
const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authID, catID, partialTitle } = req.params;
    const allBook = await Book.find({
      author: authID,
      category: catID,
      title: partialTitle,
    }) // filtering the get req localhost:8000/books?author=68596fe7e645c72792846659&category=68596f2ae645c7279284664a&title=Harry
      .populate({ path: "author", select: "name-_id" })
      .populate({ path: "category", select: "name-_id" });
    // ("author category");
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
    const { title, authID, catID, image } = req.body;
    // uploading image using multer, image is not required
    let imagePath;
    if (req.file) {
      imagePath = req.file?.path;
    }
    const newBook = await Book.create({
      title,
      author: authID,
      category: catID,
      image: imagePath,
    });
    const author = await Author.findByIdAndUpdate(authID, {
      $push: { books: newBook._id },
    });
    const categories = await Category.findByIdAndUpdate(catID, {
      $push: { books: newBook._id },
    });
    res.status(201).json({
      status: "Success",
      message: "New book is created successfully.",
      newBook,
    });
  } catch (error) {
    next(error);
  }
};

// update book name by id
const updateBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { bookID } = req.params;
    const { title } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(bookID, { title });
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
