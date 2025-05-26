import {Router} from "express"

const app = Router()

app.post("/post" , createPost)
app.get("/post", post);
app.get("/all-post", allPost);
app.delete("/post" , deletePost)
app.patch("/post", updatePost)




export default app