
# ROUTES : 

## LOGIN : 
```
app.post("/register", registerUser);
app.post("/login", login);
app.post("/logout", authUser, logout);
app.post("/changePassword", authUser, changePassword);
```

## FREELANER : 

```
app.post("/post", createPost);
app.get("/post/:id", getOnePost);
app.get("/all-post", allPost);
app.delete("/post/:id", deletePost);
```