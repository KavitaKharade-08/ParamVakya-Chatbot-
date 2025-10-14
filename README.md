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

**### 2️⃣ Start Backend Server**
Make sure your backend server.mjs runs on port 3000:

npm install
node server.mjs

If you’re using an external API, update the URL in chat.html:

const res = await fetch('https://your-backend-url.onrender.com/chat', {

**###3️⃣ Run Frontend**

Option 1 — Open chat.html directly in browser
Option 2 — Run with a local static server:

npx live-server


Then visit:

http://localhost:8080/chat.html

**☁️ Deployment on Netlify**
🔹 Step 1 — Prepare Files

Only the frontend (*.html, CSS, JS) needs to be deployed.
You can exclude backend files if your server is hosted elsewhere.

🔹 Step 2 — Deploy

Visit https://netlify.com

Log in → Add New Site → Deploy manually

Drag and drop your project folder (with HTML files)

Netlify will assign you a public URL

🔹 Step 3 — Connect Backend (Optional)

If your backend is deployed on Render, Vercel, or Railway:
Edit this line in chat.html:

const res = await fetch('https://your-backend-service.com/chat', {

**🧠 Chat Logic Overview**
Input Method	Response Type
Text Input	Text reply only
Voice Input	Text + spoken voice reply

**🎨 Customization**
You can easily customize the chatbot:

Replace the avatar .glb URL with your own Ready Player Me model:
<model-viewer src="https://models.readyplayer.me/your-model.glb" ...></model-viewer>
Modify camera angle, zoom, or lighting with:

camera-orbit="0deg 95deg 6.5m"
camera-target="0m 1.1m 0m"


Adjust voice tone or pitch:

utter.pitch = 1.1;
utter.rate = 1.0;

**🛠️ Troubleshooting**

🎤 Mic not working?
Make sure you’re using Chrome and the site is served via HTTPS.

⚡ Chat not responding?
Check if your backend server (server.mjs) is running and accessible.

🧹 Old chat history showing?
Clear browser localStorage:

localStorage.clear();

**📜 License**

This project is open-source and free to use under the MIT License.

👨‍💻 Author

Paramvakya Project
Developed by Kavita Kharade
📧 Contact: [kavitakharade22@gmail.com]

🌟 Support

If you like this project, please ⭐ the repo and share it!
Feedback and contributions are always welcome.
