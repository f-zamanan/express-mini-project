import {
  getAllCategory,
  categoryByID,
  creatCategory,
  updateCategory,
  deleteCat,
} from "../controllers/CatController";
import express from "express";

const router = express.Router();

// 1. get all categories route
router.get("/", getAllCategory);

// 2. get category by id
router.get("/:id", categoryByID);

// 3. create category
router.post("/", creatCategory);

// 4. update category name by id
router.put("/:id", updateCategory);

// 5. delete category by id
router.delete("/:id", deleteCat);

export default router;
