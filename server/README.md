# ⚔️ Clash of Code API

A RESTful API for a freelancing platform focused on coding gigs. Built for scalability and structured for ease of integration.

---

## 🌐 Base URL

```js
https://clash-of-code.onrender.com/api/v1
```

## 📌 Status Codes Cheat Sheet

| Code | Meaning               |
|------|------------------------|
| 200  | OK                     |
| 201  | Created                |
| 400  | Bad Request / Validation Error |
| 401  | Unauthorized (Login Failed)   |
| 404  | Not Found              |

---

## 📚 Use Cases

| Route            | Use Case                                                 |
|------------------|----------------------------------------------------------|
| `POST /register` | New user registration                                    |
| `POST /login`    | User login with session cookie                           |
| `POST /logout`   | Destroy session cookie                                   |
| `POST /post`     | Create freelance gigs                                    |
| `GET /post/:id`  | Fetch a single freelance gig                             |
| `GET /all-post`  | Fetch all available freelance gigs                       |
| `DELETE /post/:id` | Remove a gig from the list (admin or post owner only) |

---

## 🔐 Auth Routes

### ✅ Register User

`POST /register`

**Request Body:**

```json
{
  "username": "surajhdfkjd",
  "password": "232323dfsdDS$f0",
  "email": "rohit1@gmail.com",
  "fullName": "rohit sharma"
}
```

**Success Response: `201 Created`**

```json
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
    "createdAt": "...",
    "updatedAt": "...",
    "__v": 0
  }
}
```

**Failure Response: `400 Bad Request`**

```json
{
  "statusCode": 400,
  "success": false,
  "message": "validation failed",
  "data": {
    "username": {
      "_errors": ["username must at least contain 4 characters"]
    }
  }
}
```

---

### 🔓 Login User

`POST /login`

**Request Body:**

```json
{
  "username": "rohit",
  "password": "232323dfsdDS$f0",
  "email": "rohit@gmail.com"
}
```

**Success Response: `200 OK`**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "User login successfully",
  "data": {
    "_id": "...",
    "username": "rohit"
  }
}
```

**Failure Response: `401 Unauthorized`**

```json
{
  "statusCode": 401,
  "success": false,
  "message": "Incorrect Password"
}
```

---

### 🚪 Logout User

`POST /logout`  
**Protected Route (cookie-based authentication)**

**Success Response:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Logout successfull"
}
```

**Failure Response:**

```json
{
  "statusCode": 404,
  "message": "Access Token not found , Please login",
  "success": false
}
```

---

### 🔑 Change Password

`POST /changePassword`  
**Protected Route**

---

## 🧑‍💻 Freelancer Routes

### 📄 Create Post

`POST /post`

**Request Body:**

```json
{
  "title": "Portfolio Website",
  "description": "Need a frontend developer...",
  "about": "The project involves designing...",
  "type": "Frontend",
  "deadline": "2025-07-15T00:00:00.000Z",
  "keywords": ["React", "TailwindCSS"],
  "images": [
    "https://example.com/design-preview1.png",
    "https://example.com/design-preview2.png"
  ]
}
```

**Success Response: `201 Created`**

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Post created successfully",
  "data": {
    "_id": "...",
    "title": "Portfolio Website"
  }
}
```

**Failure Response:**

```json
{
  "statusCode": 400,
  "success": false,
  "message": "validation failed",
  "data": {
    "title": {
      "_errors": ["Title cannot be empty"]
    }
  }
}
```

---

### 📄 Get Post by ID

`GET /post/:id`

**Success Response:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "data fetched successfully",
  "data": {
    "_id": "...",
    "title": "..."
  }
}
```

**Failure Response:**

```json
{
  "statusCode": 400,
  "success": false,
  "message": "Post not found"
}
```

---

### 📄 Get All Posts

`GET /all-post`

**Success Response:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "data fetched successfully",
  "data": [
    { "_id": "...", "title": "..." }
  ]
}
```

**Empty Response:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "No Post found"
}
```

---

### ❌ Delete Post

`DELETE /post/:id`

**Success Response:**

```json
{
  "success": true,
  "message": "Freelance post deleted successfully",
  "data": {
    "_id": "...",
    "title": "..."
  }
}
```

**Failure Response:**

```json
{
  "success": false,
  "message": "Freelance post not found"
}
```

---

## 🛡️ Authentication Notes

- Use **HTTP-only cookies** for session management.
- Routes like `/logout`, `/changePassword`, `/post`, and `/delete/:id` require authentication.
- Proper `authUser` middleware is expected to be in place on the backend.

---

## 🧪 Test with Postman

Use the provided request/response structures to test endpoints. Make sure cookies are enabled to test protected routes properly.

---
