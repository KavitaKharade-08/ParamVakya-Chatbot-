import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ CORS Setup (allow Netlify + local)
app.use(cors({
  origin: [
    "http://localhost:5500",              // local dev via VSCode Live Server
    "http://localhost:3000",              // backend local
    "https://paramvakya.netlify.app",     // your Netlify site
    "https://paramvakya-chatbot.onrender.com" // your Render backend
  ],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// ✅ Serve static files (like HTML/JS/CSS)
app.use(express.static(__dirname));

// ✅ Root test route
app.get("/", (req, res) => {
  res.send("✅ Paramvakya backend is live and connected!");
});

// ✅ Chat route (main API)
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "Please send a valid message." });
  }

  // 🔥 Example mock reply (replace this later with your chatbot logic)
  const reply = `You said: ${message}`;
  res.json({ reply });
});

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
