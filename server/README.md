
# Base url : `https://clash-of-code.onrender.com/api/v1`

# ROUTES

## LOGIN

### app.post("/register", registerUser)

```js

// json data : 

{
    "username" : "surajhdfkjd",
    "password" : "232323dfsdDS$f0",
    "email" : "rohit1@gmail.com",
    "fullName" : "rohit sharma"
}

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

### app.post("/login", login)

```js

// json data

{
    "username" : "rohit",
    "password" : "232323dfsdDS$f0",
    "email" : "rohit@gmail.com",
}



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

### app.post("/logout", authUser, logout)

```js
// json data 

no data need to pass, backend will handle logout based on the cookie passed by the browser.


// success 

{
    "statusCode": 200,
    "success": true,
    "message": "Logout successfull",
    "data": []
}

// failure

{
    "statusCode": 404,
    "name": "Error",
    "message": "Access Token not found , Please login",
    "data": [],
    "success": false,
    "errors": []
}

```

app.post("/changePassword", authUser, changePassword);

## FREELANER

### app.post("/post", createPost)

```js
// data

{
  "title": "this is the title of the post",
  "description": "Need a frontend developer to create a sleek, responsive portfolio using React and TailwindCSS.",
  "about": "The project involves designing and implementing a modern portfolio website for a creative agency. You'll work closely with our designer, and all assets (images, copy, and wireframes) will be provided.",
  "type": "Frontend",
  "deadline": "2025-07-15T00:00:00.000Z",
  "keywords": ["React", "TailwindCSS", "Responsive Design", "Frontend"],
  "images": [
    "https://example.com/design-preview1.png",
    "https://example.com/design-preview2.png"
  ]
}



// success
{
    "statusCode": 201,
    "success": true,
    "message": "Post created successfully",
    "data": {
        "title": "hgfhggfjhgkjhjkjh Website",
        "description": "Need a frontend developer to create a sleek, responsive portfolio using React and TailwindCSS.",
        "about": "The project involves designing and implementing a modern portfolio website for a creative agency. You'll work closely with our designer, and all assets (images, copy, and wireframes) will be provided.",
        "type": "Frontend",
        "deadline": "2025-07-15T00:00:00.000Z",
        "registeredNumber": 0,
        "keywords": [
            "React",
            "TailwindCSS",
            "Responsive Design",
            "Frontend"
        ],
        "images": [
            "https://example.com/design-preview1.png",
            "https://example.com/design-preview2.png"
        ],
        "_id": "68347ccb6f4233ac1ac54c60",
        "createdAt": "2025-05-26T14:38:03.424Z",
        "updatedAt": "2025-05-26T14:38:03.424Z",
        "__v": 0
    }
}

// failure : 

{
    "statusCode": 400,
    "success": false,
    "message": "validation failed",
    "data": {
        "_errors": [],
        "title": {
            "_errors": [
                "Title cannot be empty"
            ]
        }
    }
}

```

### app.get("/post/:id", getOnePost)

```js

pass the id : {{baseUrl}}/post/:id

// success : 

{
    "statusCode": 200,
    "success": true,
    "message": "data fetched successfully",
    "data": {
        "_id": "68346ddb126cdf6ae9e105dc",
        "title": "2Build a Responsive Portfolio Website",
        "description": "Need a frontend developer to create a sleek, responsive portfolio using React and TailwindCSS.",
        "about": "The project involves designing and implementing a modern portfolio website for a creative agency. You'll work closely with our designer, and all assets (images, copy, and wireframes) will be provided.",
        "type": "Frontend",
        "deadline": "2025-07-15T00:00:00.000Z",
        "registeredNumber": 0,
        "keywords": [
            "React",
            "TailwindCSS",
            "Responsive Design",
            "Frontend"
        ],
        "images": [
            "https://example.com/design-preview1.png",
            "https://example.com/design-preview2.png"
        ],
        "createdAt": "2025-05-26T13:34:19.067Z",
        "updatedAt": "2025-05-26T13:34:19.067Z",
        "__v": 0
    }
}

// failure 

{
    "statusCode": 400,
    "success": false,
    "message": "Post not found",
    "data": []
}

```

### app.get("/all-post", allPost)

```js
// failure 

{
    "statusCode": 200,
    "success": true,
    "message": "No Post found",
}

// success 
{
    "statusCode": 200,
    "success": true,
    "message": "data fetched successfully",
    "data": [
        {
            "_id": "683468d3d9254abe5c905a9e",
            "title": "Build a Responsive Portfolio Website",
            "description": "Need a frontend developer to create a sleek, responsive portfolio using React and TailwindCSS.",
            "about": "The project involves designing and implementing a modern portfolio website for a creative agency. You'll work closely with our designer, and all assets (images, copy, and wireframes) will be provided.",
            "type": "Frontend",
            "deadline": "2025-07-15T00:00:00.000Z",
            "registeredNumber": 0,
            "keywords": [
                "React",
                "TailwindCSS",
                "Responsive Design",
                "Frontend"
            ],
            "images": [
                "https://example.com/design-preview1.png",
                "https://example.com/design-preview2.png"
            ],
            "createdAt": "2025-05-26T13:12:51.797Z",
            "updatedAt": "2025-05-26T13:12:51.797Z",
            "__v": 0
        },
        {
            "_id": "68346ddb126cdf6ae9e105dc",
            "title": "2Build a Responsive Portfolio Website",
            "description": "Need a frontend developer to create a sleek, responsive portfolio using React and TailwindCSS.",
            "about": "The project involves designing and implementing a modern portfolio website for a creative agency. You'll work closely with our designer, and all assets (images, copy, and wireframes) will be provided.",
            "type": "Frontend",
            "deadline": "2025-07-15T00:00:00.000Z",
            "registeredNumber": 0,
            "keywords": [
                "React",
                "TailwindCSS",
                "Responsive Design",
                "Frontend"
            ],
            "images": [
                "https://example.com/design-preview1.png",
                "https://example.com/design-preview2.png"
            ],
            "createdAt": "2025-05-26T13:34:19.067Z",
            "updatedAt": "2025-05-26T13:34:19.067Z",
            "__v": 0
        },
        {
            "_id": "68346de1126cdf6ae9e105de",
            "title": "3Build a Responsive Portfolio Website",
            "description": "Need a frontend developer to create a sleek, responsive portfolio using React and TailwindCSS.",
            "about": "The project involves designing and implementing a modern portfolio website for a creative agency. You'll work closely with our designer, and all assets (images, copy, and wireframes) will be provided.",
            "type": "Frontend",
            "deadline": "2025-07-15T00:00:00.000Z",
            "registeredNumber": 0,
            "keywords": [
                "React",
                "TailwindCSS",
                "Responsive Design",
                "Frontend"
            ],
            "images": [
                "https://example.com/design-preview1.png",
                "https://example.com/design-preview2.png"
            ],
            "createdAt": "2025-05-26T13:34:25.251Z",
            "updatedAt": "2025-05-26T13:34:25.251Z",
            "__v": 0
        }
    ]
}
```

app.delete("/post/:id", deletePost)

```js
// pass the id : 


// success

{
    "success": true,
    "message": "Freelance post deleted successfully",
    "data": {
        "_id": "683468d3d9254abe5c905a9e",
        "title": "Build a Responsive Portfolio Website",
        "description": "Need a frontend developer to create a sleek, responsive portfolio using React and TailwindCSS.",
        "about": "The project involves designing and implementing a modern portfolio website for a creative agency. You'll work closely with our designer, and all assets (images, copy, and wireframes) will be provided.",
        "type": "Frontend",
        "deadline": "2025-07-15T00:00:00.000Z",
        "registeredNumber": 0,
        "keywords": [
            "React",
            "TailwindCSS",
            "Responsive Design",
            "Frontend"
        ],
        "images": [
            "https://example.com/design-preview1.png",
            "https://example.com/design-preview2.png"
        ],
        "createdAt": "2025-05-26T13:12:51.797Z",
        "updatedAt": "2025-05-26T13:12:51.797Z",
        "__v": 0
    }
}

// failure in case post does not exists :  

{
    "success": false,
    "message": "Freelance post not found"
}

```
