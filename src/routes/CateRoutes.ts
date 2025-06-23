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
router.get("/:catID", categoryByID);
// 3. create category
router.post("/", creatCategory);
// 4. update category name by id
router.put("/:catID", updateCategory);
// 5. delete category by id
router.delete("/:catID", deleteCat);

export default router;
