import { Request, Response, Router } from "express";
import {
	allPost,
	createPost,
	deletePost,
	getOnePost,
} from "../controllers/freelance.controllers.js";

const app = Router();

app.get("/", (req: Request, res: Response) => {
    res.send("this is some data")
})

app.post("/post", createPost);
app.get("/post/:id", getOnePost);
app.get("/all-post", allPost);
app.delete("/post/:id", deletePost);

export default app;
