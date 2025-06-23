import { Request, Response, NextFunction } from "express";
import Author from "../models/Author";
import Book from "../models/Book";

// implementing all CRUD methods for AuthorController

// get all authors
const getAllAuhtors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allAuhtors = await Author.find().populate("books", "title-_id");
    res.json(allAuhtors);
  } catch (error) {
    next(error);
  }
};

// get author by id
const authorByID = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authID } = req.params;
    const foundAuth = await Author.findById(authID);
    res.json(foundAuth);
  } catch (error) {
    next(error);
  }
};

// create a new author
const creatAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, country, bookID } = req.body;
    const newAuth = await Author.create({ name, country, books: bookID });
    const book = await Book.findByIdAndUpdate(bookID, {
      $push: { author: newAuth._id },
    });
    res.json(newAuth);
  } catch (error) {
    next(error);
  }
};

// update auth name by id
const updateAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authID } = req.params;
    const { name } = req.body;
    const updatedAuth = await Author.findByIdAndUpdate(authID, { name });
    // res.json(updatedAuth);
    res.status(200).json({
      status: "Success",
      message: "Author is updated",
      updatedAuth,
    });
  } catch (error) {
    next(error);
  }
};

// Delete author by id
const deleteAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authID } = req.params;
    const deleteddAuth = await Author.findByIdAndDelete(authID);
    res.json(deleteddAuth);
  } catch (error) {
    next(error);
  }
};

export { getAllAuhtors, authorByID, creatAuth, updateAuth, deleteAuth };
