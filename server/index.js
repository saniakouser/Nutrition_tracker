const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());
const axios = require('axios');

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});

// Define your API key
const OPENAI_API_KEY = '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';

// Define the endpoint for the ChatGPT API
const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

async function getChatGPTResponse(prompt) {
    // Construct the request payload
    const payload = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
    };

    // Set up the request headers with your API key for authentication
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
    };

    try {
        // Send the request to the ChatGPT API
        const response = await axios.post(API_ENDPOINT, payload, { headers });

        // Check if request was successful
        if (response.status === 200) {
            const data = response.data;
            return data.choices[0].message.content.trim(); // Extract the generated response
        } else {
            console.log("Request failed with status code:", response.status);
            return null;
        }
    } catch (error) {
        console.error("Error occurred:", error.message);
        return null;
    }
}

// Example usage
const prompt = "Say this is a test!";
getChatGPTResponse(prompt)
    .then(response => {
        if (response) {
            console.log("ChatGPT Response:", response);
        } else {
            console.log("Failed to get a response from ChatGPT.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
