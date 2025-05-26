
# ROUTES : 

## LOGIN : 

### app.post("/register", registerUser);

```
// success
{
    "statusCode": 201,
    "success": true,
    "message": "User created successfully",
    "data": {
        "username": "rohit",
        "avatar": "some default image link",
        "email": "rohit@gmail.com",
        "fullName": "rohit sharma",
        "role": "user",
        "isVerifiedAdmin": false,
        "_id": "68347b01ddb1bd6cab30a3c7",
        "createdAt": "2025-05-26T14:30:25.329Z",
        "updatedAt": "2025-05-26T14:30:25.329Z",
        "__v": 0
    }
}

// failure
{
    "statusCode": 400,
    "success": false,
    "message": "validation failed",
    "data": {
        "_errors": [],
        "username": {
            "_errors": [
                "username must at least contain 4 characters"
            ]
        }
    }
}
```

### app.post("/login", login);

```
// success 

{
    "statusCode": 200,
    "success": true,
    "message": "User login successfully",
    "data": {
        "_id": "68347b01ddb1bd6cab30a3c7",
        "username": "rohit",
        "avatar": "some default image link",
        "email": "rohit@gmail.com",
        "fullName": "rohit sharma",
        "role": "user",
        "isVerifiedAdmin": false,
        "createdAt": "2025-05-26T14:30:25.329Z",
        "updatedAt": "2025-05-26T14:35:00.665Z",
        "__v": 0
    }
}

// failure 

{
    "statusCode": 401,
    "name": "Error",
    "message": "Incorrect Password",
    "data": [],
    "success": false,
    "errors": []
}
```


### app.post("/logout", authUser, logout);

```

```

app.post("/changePassword", authUser, changePassword);




## FREELANER : 

```
app.post("/post", createPost);
app.get("/post/:id", getOnePost);
app.get("/all-post", allPost);
app.delete("/post/:id", deletePost);
```