
# 🧾 Activity Booking API

A RESTful API for managing users, activities, and bookings. Built using **Node.js**, **Express**, and **MongoDB**, with JWT-based authentication and secure route access.

---

## 🚀 Features

- User registration and login with JWT auth
- Secure password hashing using bcrypt
- Book activities and view personal bookings

- MongoDB data models with Mongoose
- Middleware for error handling, auth, and security

---

## 🛠️ Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js for password hashing


---

## 📁 Project Structure

```
project-root/
├── config/
│   └── config.env.env
│     └── db.js

├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── public/
├── server.js
├── seeder.js
└── README.md
```

---

## 🔐 API Authentication

All protected routes require an **Authorization header**:
```
Authorization: Bearer <token>
```
Or you can use the `token` cookie if enabled.

---

## 🔧 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/activity-booking-api.git
   cd activity-booking-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file inside `/config` folder**
   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRE=30d
   JWT_COOKIE_EXPIRE=30
   ```

4. **Run server**
   ```bash
   npm run dev
   ```

---

## 📮 API Endpoints

### 🔑 Auth Routes

| Method | Endpoint               | Description         | Access |
|--------|------------------------|---------------------|--------|
| POST   | /api/v1/users/register | Register new user   | Public |
| POST   | /api/v1/users/login    | Login and get token | Public |

---

### 🗓️ Activity Routes

| Method | Endpoint            | Description        | Access |
|--------|---------------------|--------------------|--------|
| GET    | /api/v1/activity    | Get all activities | Public |

---

### 📌 Booking Routes

| Method | Endpoint                         | Description               | Access  |
|--------|----------------------------------|---------------------------|---------|
| POST   | /api/v1/activity/:id/book        | Book an activity          | Private |
| GET    | /api/v1/booking                  | Get current user's bookings | Private |

---

## 🔒 Security Middleware Included

- `helmet` – sets security headers
- `xss-clean` – prevents XSS attacks
- `hpp` – prevents HTTP param pollution
- `mongo-sanitize` – prevents NoSQL injection
- `rate-limit` – limits requests per IP
- `cors` – enables cross-origin requests
- `cookie-parser` – parses cookies

You can enable/disable these in `server.js` by uncommenting the relevant middleware.

---

## 🧪 Testing

Use [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/) for testing endpoints. Make sure to include the JWT token in the header for protected routes.

---

## 📌 Future Improvements (Ideas)

- Admin role and activity management
- File upload for activity cover image
- Pagination, filtering, and search for activities
- Email notifications for booking confirmation
- Swagger API documentation

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 👤 Author

Developed by **Mohit Kumar Singh**  
Backend Developer | Node.js Enthusiast
