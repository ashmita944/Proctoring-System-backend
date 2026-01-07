Proctoring System Backend

This is a backend application for an online proctoring system.  
It handles authentication, authorization, and exam-related APIs using a clean and modular backend architecture.

Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Token)
- Mongoose

Features
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes using middleware
- Exam-related APIs (create, access, manage)
- Modular folder structure (routes, controllers, models, middleware)

Project Structure
src/
│── config/
│ └── db.js
│
│── routes/
│ ├── auth.routes.js
│ ├── user.routes.js
│ └── exam.routes.js
│
│── controllers/
│ ├── auth.controller.js
│ ├── user.controller.js
│ └── exam.controller.js
│
│── models/
│ ├── User.js
│ └── Exam.js
│
│── middlewares/
│ └── auth.middleware.js
│
│── index.js


Authentication Flow
1. User logs in with email and password
2. Server verifies credentials
3. JWT token is generated
4. Token is sent to the client
5. Client sends token in request headers for protected routes
6. Middleware verifies token before allowing access

Environment Variables
Create a `.env` file and add:
