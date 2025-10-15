import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { CohereClient } from "cohere-ai";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// === Cohere setup ===
const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

// === Path setup (for serving frontend) ===
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve static frontend files (chat.html, JS, CSS, etc.)
app.use(express.static(__dirname));

// ✅ Serve chat.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "chat.html"));
});

// === Chat endpoint ===
app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;
    console.log("Received user message:", userMessage);

    if (!userMessage) {
      return res.status(400).json({ error: "No message received" });
    }

    // 🧠 Send message to Cohere
    const response = await cohere.chat({
      model: "command-r-08-2024",
      message: userMessage,
    });

    console.log("Response from Cohere:", response);

    const reply = response.text || "Sorry, I couldn’t understand that.";
    res.json({ reply });
  } catch (err) {
    console.error("❌ Cohere API error:", err);
    res.status(500).json({ error: "Something went wrong with Cohere API." });
  }
});

// === Start Server ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
