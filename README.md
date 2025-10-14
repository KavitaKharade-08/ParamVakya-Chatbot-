# ParamVakya-Chatbot

**Paramvakya** is an intelligent chatbot web application featuring a lifelike **3D avatar** that responds through **text and voice**.  
It’s built using **HTML, TailwindCSS, and JavaScript**, with support for **speech recognition**, **text-to-speech**, and **chat history** stored in the browser.

---

## 🌐 Live Demo (After Deployment)

Once you deploy on Netlify, your site will be available at:

👉 **https://paramvakya.netlify.app**  
*(You can rename it in Netlify dashboard.)*

---

## ⚙️ Features

- 🧍‍♂️ **3D Avatar Integration** — Realistic Ready Player Me avatar rendered via `<model-viewer>`
- 💬 **Interactive Chat** — Type or speak to chat with Paramvakya
- 🧠 **AI Backend Support** — Works with your Node.js `/chat` API endpoint
- 🗣️ **Speech Recognition** — Converts your voice input to text (Web Speech API)
- 🔊 **Text-to-Speech Output** — Avatar speaks responses when you use voice input
- 🧾 **Persistent History** — Chat sessions stored locally in browser via `localStorage`
- 🌈 **Modern UI** — Clean TailwindCSS design with dark theme and sidebar chat list

---

## 🗂️ Folder Structure

project-root/
│
├── node_modules/ # Backend dependencies
├── .env # Environment variables (for Node backend)
├── chat.html # Main chatbot interface
├── index.html # Landing or home page
├── fast.html # Alternate chatbot UI
├── multilingual.html # Multilingual version
├── secure.html # Secure variant
├── smart.html # Experimental version
├── server.mjs # Node.js backend for handling /chat route
├── package.json # Backend dependencies config
└── package-lock.json

---

## 🧩 Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | HTML5, TailwindCSS, Vanilla JavaScript |
| **3D Model** | Google `<model-viewer>` |
| **Voice Input** | Web Speech API (`webkitSpeechRecognition`) |
| **Voice Output** | SpeechSynthesis API |
| **Storage** | Browser LocalStorage |
| **Backend (optional)** | Node.js + Express (server.mjs) |

---

## 💻 How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/paramvakya.git
cd paramvakya




