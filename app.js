// app.js
require('dotenv').config(); // Load environment variables from .env

// Access environment variables
const apiKey = process.env.API_KEY;
const dbUrl = process.env.DATABASE_URL;
const jwtSecret = process.env.JWT_SECRET;

// Example usage of the variables
console.log('API Key:', apiKey);
console.log('Database URL:', dbUrl);
console.log('JWT Secret:', jwtSecret);

// Simulate application logic (replace with your actual app logic)
const startApp = () => {
  if (!apiKey || !dbUrl || !jwtSecret) {
    console.error('Missing environment variables! Check your .env file.');
    process.exit(1);
  }
  console.log('Application started successfully!');
};

startApp();
