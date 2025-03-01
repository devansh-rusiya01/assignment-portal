Assignment Portal

Description

This project is a web-based application deployed successfully on Render. It includes features such as browsing, uploading, and managing assignments. The backend is built using Node.js and MySQL, while the frontend is developed with modern web technologies.

Features

User authentication and authorization

Upload and view assignments

Database integration with MySQL

Deployed on Render for production use

Tech Stack

Backend: Node.js, Express.js

Database: MySQL

Deployment: Render

Installation

Clone the repository:

git clone https://github.com/yourusername/your-repo.git
cd your-repo

Install dependencies:

npm install

Create a .env file in the root directory and add the following environment variables:

DB_HOST=your-database-host
DB_USER=your-database-user
DB_PASS=your-database-password
DB_NAME=your-database-name

Start the server:

npm start

or with nodemon (for development):

npm run dev

Deployment

The project is deployed on Render. Ensure the environment variables are correctly set in Render's settings.

Usage

Open the application in your browser.

Login or register to access features.

Upload and manage assignments easily.

Troubleshooting

If you face database connection issues after deployment:

Ensure MySQL allows external connections.

Check that the database credentials match Render’s environment settings.

Use mysql2 with serialized connections to avoid multiple connection issues.

Contributors

Devansh Rusiya
