Backend API
This project is a Node.js backend API that fetches and updates stock prices periodically using a cron job. It includes endpoints to start the cron job and fetch the latest prices from the database.

Table of Contents
Prerequisites
Installation
Running the Application
Endpoints
Environment Variables
Troubleshooting
Prerequisites
Node.js (v14 or later)
MongoDB (local or cloud instance)
npm (Node Package Manager)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repo.git
cd your-repo
Install dependencies:

bash
Copy code
npm install
Running the Application
Start the server:

bash
Copy code
npm run dev:watch
This command starts the server in development mode with nodemon for automatic restarts.

Start the cron job to fetch and update prices:

Visit the following endpoint to start the cron job:

bash
Copy code
GET http://localhost:3030/start
This will schedule a cron job to run every 5 seconds and immediately run the first update.

Fetch the latest prices:

Visit the following endpoint to fetch the latest prices from the database:

bash
Copy code
GET http://localhost:3030/getPrice
This endpoint retrieves and returns the latest 20 prices from the database, sorted by creation date.

Endpoints
Start Cron Job

URL: /start
Method: GET
Description: Starts the cron job that fetches and updates stock prices every 5 seconds.
Fetch Prices

URL: /getPrice
Method: GET
Description: Fetches and returns the latest 20 stock prices from the database.
Environment Variables
Create a .env.dev file in the root directory of the project with the following environment variables:

bash
Copy code
PORT=3030
MONGO_URI=mongodb://localhost:27017/your-database
YOUR_API_KEY=your_api_key_here
PORT: Port where the server will run.
MONGO_URI: MongoDB connection string.
YOUR_API_KEY: API key for third-party services.
Troubleshooting
MongoDB Connection Issues: Ensure MongoDB is running and the connection URI is correct.
Cron Job Not Running: Verify that the cron job has been correctly scheduled and check the console logs for any errors.
Fetching Prices: Ensure that data is being inserted correctly into the MongoDB collection and that the schema matches the expected structure.
