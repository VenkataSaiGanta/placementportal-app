# InsiderJobs

InsiderJobs is a full-stack job listing and application platform built using the MERN stack. It allows users to browse job postings, apply for jobs, and manage applications efficiently.

## Live Demo
[Click here to view InsiderJobs](https://insider-jobs-full-stack-client.vercel.app/)

## Features
- **User Authentication**: Secure login and signup using JWT authentication.
- **Job Listings**: View job opportunities posted by companies.
- **Application Management**: Users can apply for jobs and track their applications.
- **Admin Panel**: Admins can add, update, or remove job listings.
- **Responsive UI**: Built with React and Tailwind CSS for a seamless experience across devices.
- **Real-time Updates**: Job postings and applications update dynamically.

## Tech Stack
### Frontend:
- React.js
- Tailwind CSS
- React Router
- Context API

### Backend:
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Installation
### Prerequisites
- Node.js & npm installed
- MongoDB running locally or a cloud instance

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/VenkataSaiGanta/placementportal-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd placementportal-app
   ```
3. Install dependencies for both client and server:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
4. Set up environment variables (`.env` files in both client and server directories):
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
5. Start the development server:
   ```bash
   cd server && npm start
   ```
   Open a new terminal and run the client:
   ```bash
   cd client && npm start
   ```

## Folder Structure
```
InsiderJobs/
├── client/ (Frontend - React)
├── server/ (Backend - Express, MongoDB)
├── README.md
```

