import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

// Set the port
app.set("port", process.env.PORT || 8000);

// Configure CORS — restricted to the frontend origin. Set FRONTEND_URL in
// .env to the deployed frontend URL (e.g. https://<app>.vercel.app);
// the default is the local CRA dev server.
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";
app.use(cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"] // Allowed headers
}));

app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    try {
        // Connect to MongoDB
        const connectionDb = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);

        // Start the server
        server.listen(app.get("port"), () => {
            console.log(`LISTENING ON PORT ${app.get("port")}`);
        });
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1); // Exit the process if unable to connect to the database
    }
};

// Start the application
start();
