# 🔗 MERN Stack Zoom Clone - Video Meeting App

A full-stack Zoom-like video conferencing web app built using the MERN Stack (MongoDB, Express, React, Node.js). This app allows users to sign up, create or join video meeting rooms, chat during the meeting, and collaborate in real time with multiple users.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Login / Register with JWT authentication
  - Secure session handling

- 🎥 **Video Conferencing**
  - Peer-to-peer video and audio using WebRTC
  - Multiple participants per meeting
  - Mute/Unmute and Camera ON/OFF toggles

- 💬 **Live Chat**
  - Real-time chat integrated in meeting room
  - Messages visible to all meeting participants

- 👥 **Meeting Rooms**
  - Create new meetings with unique Room IDs
  - Join meetings by sharing/joining room links

- 🌐 **Tech Stack**
  - Frontend: React.js, WebRTC, Socket.IO Client
  - Backend: Node.js, Express.js, Socket.IO, MongoDB

---

## 🛠️ Installation

### 1. Clone the Repository

git clone (https://github.com/gauravdev95/Zoom-meeting-app)
cd mern-zoom-clone
cd server
npm install


PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


cd client
npm install
npm start

```bash
