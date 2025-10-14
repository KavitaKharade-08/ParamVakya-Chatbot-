import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { CohereClient } from "cohere-ai";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;
    console.log("Received userMessage:", userMessage);

    if (!userMessage) {
      return res.status(400).json({ error: "No message received" });
    }

    const payload = {
      model: "command-r-08-2024",  // use a safe, supported model
      message: userMessage,
    };
    console.log("Payload to Cohere.chat:", payload);

    const response = await cohere.chat(payload);

    console.log("Response from Cohere:", response);

    const reply = response.text;  // property `.text`
    res.json({ reply });
  } catch (err) {
    console.error("Cohere API error:", err);
    res.status(500).json({ error: "Something went wrong with Cohere API" });
  }
});

app.listen(3000, () => {
  console.log("✅ Chatbot backend running at http://localhost:3000");
});
