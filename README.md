# 📚 SmartNotes — Student Notes Sharing Portal

> A full-stack web platform built for **Smt. Indira Gandhi College of Engineering (SIGCE)** that lets students upload, share, and access academic study materials in one place.

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-smartnotes--system.vercel.app-brightgreen?style=for-the-badge)](https://smartnotes-system.vercel.app/index.html)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Firebase](https://img.shields.io/badge/Backend-Firebase-orange?style=for-the-badge&logo=firebase)](https://firebase.google.com)
![HTML](https://img.shields.io/badge/HTML-81.5%25-red?style=flat-square&logo=html5)
![CSS](https://img.shields.io/badge/CSS-13.5%25-blue?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-5%25-yellow?style=flat-square&logo=javascript)

---

## 🎯 Problem It Solves

Students at SIGCE had no centralized place to find or share study materials. Notes, PYQs, and assignments were scattered across WhatsApp groups — hard to find, disorganized, and unreliable.

**SmartNotes** fixes this — one clean platform, organized by year and subject, with an admin review system to maintain quality.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📄 Upload Materials | Students can submit Notes, Assignments, Experiments & PYQs |
| 📥 Download Resources | Access and download materials shared by peers |
| 🎓 Year-wise Organization | Separated by 2nd Year, 3rd Year, and Final Year |
| 🔐 Role-based Login | Separate portals for Students and Admins |
| ✅ Admin Approval System | All uploads reviewed before going live |
| 📱 Responsive UI | Works seamlessly on mobile and desktop |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Authentication | Firebase Auth |
| Database | Firebase Firestore |
| Hosting | Vercel |

---

## 📁 Project Structure

```
student_notes_sharing_portal/
│
├── index.html       # Student portal (login + browse + upload)
├── admin.html       # Admin dashboard (approve/reject uploads)
├── script.js        # Firebase logic, auth, Firestore operations
└── style.css        # Styling and responsive layout
```

---

## 🚀 Getting Started (Run Locally)

1. **Clone the repository**
   ```bash
   git clone https://github.com/tejasrathod2706-source/student_notes_sharing_portal-S.I.G.C.E.git
   cd student_notes_sharing_portal-S.I.G.C.E
   ```

2. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable **Authentication** (Email/Password) and **Firestore Database**
   - Replace the Firebase config in `script.js` with your own config

3. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use Live Server extension in VS Code
   ```

---

## 🔑 Demo Credentials

| Role | Username | Password |
|---|---|---|
| Student | `student` | `pass123` |
| Admin | *(Set up in Firebase Auth)* | — |

---

## 📸 Screenshots

> *Coming soon — feel free to add screenshots of the portal UI here!*

---

## 🙋 Author

**Tejas Rathod**
- 🎓 CSE (AI/ML) Student at SIGCE
- 💼 [LinkedIn](https://www.linkedin.com/in/tejas-rathod)
- 🐙 [GitHub](https://github.com/tejasrathod2706-source)
- 📧 tejasrathod2706@gmail.com

---

## 🌟 Show Your Support

If you found this project helpful or interesting, please give it a **⭐ Star** — it really motivates me to keep building!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
