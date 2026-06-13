# Portfolio Backend API

Complete production-ready backend for Personal Portfolio Website built with Node.js, Express.js, MongoDB, and JWT Authentication.

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Multer** - File upload
- **Nodemailer** - Email service
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger
- **Express Rate Limit** - Rate limiting
- **Express Validator** - Input validation

## Project Structure

```
backend/
├── config/
│   └── database.js          # MongoDB configuration
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── projectController.js # Project CRUD
│   ├── skillController.js   # Skill CRUD
│   ├── educationController.js # Education CRUD
│   ├── experienceController.js # Experience CRUD
│   ├── serviceController.js # Service CRUD
│   ├── messageController.js # Message handling
│   ├── profileController.js # Profile CRUD
│   └── dashboardController.js # Dashboard stats
├── middleware/
│   ├── auth.js              # JWT authentication
│   ├── validation.js        # Input validation
│   ├── errorHandler.js      # Error handling
│   └── upload.js            # File upload with Multer
├── models/
│   ├── User.js              # User/Admin model
│   ├── Project.js           # Project model
│   ├── Skill.js             # Skill model
│   ├── Education.js         # Education model
│   ├── Experience.js        # Experience model
│   ├── Service.js           # Service model
│   ├── Message.js           # Message model
│   └── Profile.js           # Profile model
├── routes/
│   ├── authRoutes.js        # Auth routes
│   ├── projectRoutes.js     # Project routes
│   ├── skillRoutes.js      # Skill routes
│   ├── educationRoutes.js  # Education routes
│   ├── experienceRoutes.js # Experience routes
│   ├── serviceRoutes.js    # Service routes
│   ├── messageRoutes.js    # Message routes
│   ├── profileRoutes.js    # Profile routes
│   └── dashboardRoutes.js  # Dashboard routes
├── uploads/                # Uploaded files
├── utils/                  # Utility functions
├── app.js                  # Express app configuration
├── server.js               # Server entry point
├── .env                    # Environment variables
└── package.json            # Dependencies
```

## Installation

1. Clone the repository
2. Navigate to the backend directory
3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file with the following variables:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio_db
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=qaswar@example.com
MAX_FILE_SIZE=5242880
ALLOWED_IMAGE_TYPES=image/jpeg,image/jpg,image/png,image/gif
ALLOWED_FILE_TYPES=application/pdf,application/msword
FRONTEND_URL=http://localhost:3000
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

5. Start MongoDB server
6. Run the server:
```bash
npm run dev
```

For production:
```bash
npm start
```

## API Documentation

### Base URL
```
http://localhost:5000/api
```

---

### Authentication Routes

#### Register Admin
```http
POST /api/auth/register
```

**Request Body:**
```json
{
  "name": "Admin Name",
  "email": "admin@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64f1a2b3c4d5e6f7a8b9c0d1",
    "name": "Admin Name",
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

#### Login
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64f1a2b3c4d5e6f7a8b9c0d1",
    "name": "Admin Name",
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

#### Get Current User
```http
GET /api/auth/me
```

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "64f1a2b3c4d5e6f7a8b9c0d1",
    "name": "Admin Name",
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

---

### Project Routes

#### Get All Projects
```http
GET /api/projects
```

**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
      "title": "AIoT Smart Home Assistant",
      "description": "Intelligent home automation system",
      "technologies": ["Arduino", "Python", "IoT", "AI"],
      "githubLink": "https://github.com/...",
      "liveDemoLink": "https://demo.example.com",
      "image": "uploads/project-1234567890.jpg",
      "category": "iot",
      "featured": true,
      "createdAt": "2024-01-15T10:00:00.000Z"
    }
  ]
}
```

#### Get Single Project
```http
GET /api/projects/:id
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
    "title": "AIoT Smart Home Assistant",
    "description": "Intelligent home automation system",
    "technologies": ["Arduino", "Python", "IoT", "AI"],
    "githubLink": "https://github.com/...",
    "liveDemoLink": "https://demo.example.com",
    "image": "uploads/project-1234567890.jpg",
    "category": "iot",
    "featured": true
  }
}
```

#### Create Project (Admin Only)
```http
POST /api/projects
```

**Headers:**
```
Authorization: Bearer <token>
Content-Type: multipart/form-data
```

**Request Body:**
```json
{
  "title": "AIoT Smart Home Assistant",
  "description": "Intelligent home automation system",
  "technologies": ["Arduino", "Python", "IoT", "AI"],
  "githubLink": "https://github.com/...",
  "liveDemoLink": "https://demo.example.com",
  "category": "iot",
  "featured": true
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
    "title": "AIoT Smart Home Assistant",
    "description": "Intelligent home automation system",
    "technologies": ["Arduino", "Python", "IoT", "AI"],
    "githubLink": "https://github.com/...",
    "liveDemoLink": "https://demo.example.com",
    "category": "iot",
    "featured": true
  }
}
```

#### Update Project (Admin Only)
```http
PUT /api/projects/:id
```

**Headers:**
```
Authorization: Bearer <token>
Content-Type: multipart/form-data
```

**Request Body:** Same as create project

**Response:** Same as create project

#### Delete Project (Admin Only)
```http
DELETE /api/projects/:id
```

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "message": "Project deleted successfully"
}
```

---

### Skill Routes

#### Get All Skills
```http
GET /api/skills
```

**Response:**
```json
{
  "success": true,
  "count": 10,
  "data": [
    {
      "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
      "name": "JavaScript",
      "category": "web",
      "percentage": 90,
      "icon": "fab fa-js"
    }
  ]
}
```

#### Get Skills by Category
```http
GET /api/skills/category/:category
```

**Response:** Same as get all skills, filtered by category

#### Create Skill (Admin Only)
```http
POST /api/skills
```

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "name": "JavaScript",
  "category": "web",
  "percentage": 90,
  "icon": "fab fa-js"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
    "name": "JavaScript",
    "category": "web",
    "percentage": 90,
    "icon": "fab fa-js"
  }
}
```

#### Update Skill (Admin Only)
```http
PUT /api/skills/:id
```

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:** Same as create skill

#### Delete Skill (Admin Only)
```http
DELETE /api/skills/:id
```

**Headers:**
```
Authorization: Bearer <token>
```

---

### Education Routes

#### Get All Education
```http
GET /api/education
```

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
      "degree": "Bachelor of Science in Computer Science",
      "institution": "University of Technology",
      "startYear": 2021,
      "endYear": 2025,
      "grade": "3.8/4.0",
      "description": "Specializing in Software Engineering"
    }
  ]
}
```

#### Create Education (Admin Only)
```http
POST /api/education
```

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "degree": "Bachelor of Science in Computer Science",
  "institution": "University of Technology",
  "startYear": 2021,
  "endYear": 2025,
  "grade": "3.8/4.0",
  "description": "Specializing in Software Engineering"
}
```

#### Update Education (Admin Only)
```http
PUT /api/education/:id
```

#### Delete Education (Admin Only)
```http
DELETE /api/education/:id
```

---

### Experience Routes

#### Get All Experience
```http
GET /api/experience
```

**Response:**
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
      "company": "Tech Solutions Inc.",
      "position": "Web Developer",
      "duration": "2023 - Present",
      "description": "Full-stack web development"
    }
  ]
}
```

#### Create Experience (Admin Only)
```http
POST /api/experience
```

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "company": "Tech Solutions Inc.",
  "position": "Web Developer",
  "duration": "2023 - Present",
  "description": "Full-stack web development"
}
```

#### Update Experience (Admin Only)
```http
PUT /api/experience/:id
```

#### Delete Experience (Admin Only)
```http
DELETE /api/experience/:id
```

---

### Service Routes

#### Get All Services
```http
GET /api/services
```

**Response:**
```json
{
  "success": true,
  "count": 6,
  "data": [
    {
      "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
      "title": "Frontend Development",
      "description": "Creating responsive and interactive user interfaces",
      "icon": "fas fa-paint-brush"
    }
  ]
}
```

#### Create Service (Admin Only)
```http
POST /api/services
```

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "title": "Frontend Development",
  "description": "Creating responsive and interactive user interfaces",
  "icon": "fas fa-paint-brush"
}
```

#### Update Service (Admin Only)
```http
PUT /api/services/:id
```

#### Delete Service (Admin Only)
```http
DELETE /api/services/:id
```

---

### Message Routes

#### Get All Messages (Admin Only)
```http
GET /api/messages
```

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "count": 15,
  "data": [
    {
      "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
      "name": "John Doe",
      "email": "john@example.com",
      "subject": "Project Inquiry",
      "message": "I would like to discuss a project...",
      "isRead": false,
      "createdAt": "2024-01-15T10:00:00.000Z"
    }
  ]
}
```

#### Create Message (Public)
```http
POST /api/messages
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a project..."
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I would like to discuss a project...",
    "isRead": false
  }
}
```

#### Mark Message as Read (Admin Only)
```http
PUT /api/messages/:id/read
```

**Headers:**
```
Authorization: Bearer <token>
```

#### Delete Message (Admin Only)
```http
DELETE /api/messages/:id
```

---

### Profile Routes

#### Get Profile
```http
GET /api/profile
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
    "fullName": "Qaswar Abbas",
    "profession": "Computer Science Student & Web Developer",
    "bio": "Passionate developer with expertise in web development...",
    "profileImage": "uploads/profile-1234567890.jpg",
    "cvFile": "uploads/cv-1234567890.pdf",
    "github": "https://github.com/qaswar",
    "linkedin": "https://linkedin.com/in/qaswar",
    "email": "qaswar@example.com",
    "phone": "+92 123 4567890",
    "location": "Pakistan"
  }
}
```

#### Create Profile (Admin Only)
```http
POST /api/profile
```

**Headers:**
```
Authorization: Bearer <token>
Content-Type: multipart/form-data
```

**Request Body:**
```json
{
  "fullName": "Qaswar Abbas",
  "profession": "Computer Science Student & Web Developer",
  "bio": "Passionate developer with expertise in web development...",
  "github": "https://github.com/qaswar",
  "linkedin": "https://linkedin.com/in/qaswar",
  "email": "qaswar@example.com",
  "phone": "+92 123 4567890",
  "location": "Pakistan"
}
```

#### Update Profile (Admin Only)
```http
PUT /api/profile
```

**Headers:**
```
Authorization: Bearer <token>
Content-Type: multipart/form-data
```

#### Delete Profile (Admin Only)
```http
DELETE /api/profile
```

---

### Dashboard Routes

#### Get Dashboard Statistics (Admin Only)
```http
GET /api/dashboard/stats
```

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalProjects": 5,
    "totalSkills": 10,
    "totalMessages": 15,
    "totalServices": 6,
    "unreadMessages": 3,
    "recentMessages": [
      {
        "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
        "name": "John Doe",
        "email": "john@example.com",
        "subject": "Project Inquiry",
        "isRead": false,
        "createdAt": "2024-01-15T10:00:00.000Z"
      }
    ]
  }
}
```

---

### Health Check

```http
GET /api/health
```

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

---

## Status Codes

- `200 OK` - Request successful
- `201 Created` - Resource created successfully
- `400 Bad Request` - Invalid request data
- `401 Unauthorized` - Authentication required
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

---

## Security Features

- **JWT Authentication** - Token-based authentication
- **Password Hashing** - Bcrypt for secure password storage
- **Rate Limiting** - Protection against brute force attacks
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing configuration
- **Input Validation** - Express Validator for data validation
- **File Upload Validation** - Multer with file type and size validation

---

## Testing with Postman

1. Import the API endpoints into Postman
2. Set environment variables for base URL
3. First, register an admin account using `/api/auth/register`
4. Copy the token from the response
5. Add the token to the authorization header for protected routes
6. Test all endpoints

---

## Error Handling

All errors return a JSON response with the following format:
```json
{
  "success": false,
  "error": "Error message"
}
```

---

## Deployment

1. Set `NODE_ENV=production` in environment variables
2. Update `MONGODB_URI` with production database URL
3. Use a secure `JWT_SECRET`
4. Configure email service with production credentials
5. Deploy to a hosting service (Heroku, DigitalOcean, AWS, etc.)

---

## License

MIT

---

## Author

Qaswar Abbas
