import express from "express";
import notFound from "./middlewares/NotFound";
import ErrorHandler from "./middlewares/ErrorHnadler";
import morgan from "morgan";
import cors from "cors";
import authorRoutes from "./routes/AuthorRoutes";
import bookRoutes from "./routes/BookRoutes";
import catsRoutes from "./routes/CateRoutes";

const app = express();
const PORT = 8000;
// all middlewares are places before routes
app.use(express.json());
app.use(morgan("dev")); // Logging middleware
app.use(cors()); // middleware allows cross-origin requests

// Routes
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
app.use("/cats", catsRoutes);

app.use(notFound);
app.use(ErrorHandler);

export default app;
