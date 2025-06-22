import express from "express";
import {
  getAllAuhtors,
  authorByID,
  creatAuth,
  updateAuth,
  deleteAuth,
} from "../controllers/AuthorController";

const router = express.Router();

//1. get all authors route
router.get("/", getAllAuhtors);
//2. get author by id
router.get("/:id", authorByID);
//3. create author
router.post("/", creatAuth);
//4. update author name by id
router.put("/:id", updateAuth);
//5. delete author by id
router.delete("/:id", deleteAuth);

export default router;
