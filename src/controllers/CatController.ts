import { Request, Response, NextFunction } from "express";
import Category from "../models/Category";

// implementing all CRUD methods for AuthorController

// get all categories
const getAllCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allCats = await Category.find();
    res.json(allCats);
  } catch (error) {
    next(error);
  }
};

// get category by id
const categoryByID = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { catID } = req.params;
    const foundCat = await Category.findById(catID);
    res.json(foundCat);
  } catch (error) {
    next(error);
  }
};

// create a new category
const creatCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.body;
    const newCat = await Category.create({ name });
    res.json(newCat);
  } catch (error) {
    next(error);
  }
};

// update category name by id
const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { catID } = req.params;
    const { name } = req.body;
    const updatedCat = await Category.findByIdAndUpdate(catID, name);
    res.json(updatedCat);
  } catch (error) {
    next(error);
  }
};

// Delete category by id
const deleteCat = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { CatID } = req.params;
    const deleteddCat = await Category.findByIdAndDelete(CatID);
    res.json(deleteddCat);
  } catch (error) {
    next(error);
  }
};

export {
  getAllCategory,
  categoryByID,
  creatCategory,
  updateCategory,
  deleteCat,
};
