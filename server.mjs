import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve all static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// ✅ Serve chat.html for root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "chat.html"));
});

// === Your existing chat endpoint ===
app.post("/chat", async (req, res) => {
  const { message } = req.body;
  // handle logic or return a mock response
  res.json({ reply: `You said: ${message}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
