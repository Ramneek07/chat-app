# chat-app

# MERN Stack Real-Time Chat App 💬

Welcome to the MERN Stack Real-Time Chat Application\! This is a full-stack project built using **MongoDB, Express.js, React.js, and Node.js**, with **Socket.IO** for live, bidirectional communication.

This application allows users to sign up, log in, and chat with other registered users in real-time. When a user sends a message, it is instantly delivered to the recipient without needing to reload the page, creating a seamless and modern chat experience.

Finally, we'll walk through deploying this application online for free using **Vercel**, making it accessible to anyone on the web.


### ✨ https://chat-app-opal-theta-23.vercel.app/login

-----

## 🚀 Features

  * **User Authentication:** Secure user registration and login (JWT).
  * **Real-Time Messaging:** Instant message delivery using Socket.IO.
  * **Online User Status:** See which users are currently online.
  * **One-on-One Chat:** Private conversations between users.
  * **Message History:** Conversations are saved to the database and loaded on selection.
  * **Responsive Design:** A clean and modern UI that works on all screen sizes.
  * **Protected Routes:** Only authenticated users can access the chat application.

-----

## 🛠️ Tech Stack

  * **Frontend:** React.js, Tailwind CSS, DaisyUI
  * **Backend:** Node.js, Express.js
  * **Database:** MongoDB (with Mongoose)
  * **Real-Time Communication:** Socket.IO
  * **Authentication:** JSON Web Tokens (JWT), bcryptjs
  * **Deployment:** Vercel

-----

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your local machine:

  * [Node.js](https://nodejs.org/en/) (v18.x or later)
  * [npm](https://www.npmjs.com/) (Node Package Manager)
  * [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

-----

## ⚙️ Getting Started

Follow these steps to get the project up and running on your local machine.

### 1\. Clone the Repository

```bash
git clone https://github.com/Ramneek07/chat-app.git
cd your chat-app
```

### 2\. Backend Setup

Navigate to the `backend` directory and install the required dependencies.

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory and add the following environment variables. Replace the placeholder values with your actual data.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend development server:

```bash
npm run dev
```

The server will be running on `http://localhost:5000`.

### 3\. Frontend Setup

In a new terminal, navigate to the `frontend` directory and install its dependencies.

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` directory (if needed by your setup, especially for API proxying).

Start the React development server:

```bash
npm run dev
```

The frontend application will be available at `http://localhost:5173` (or another port specified by Vite/Create React App).

-----

## 🚀 Deployment

This application is configured for easy deployment on **Vercel**.

1.  **Push your code** to your GitHub repository.
2.  **Sign up** or **Log in** to your [Vercel](https://vercel.com/) account.
3.  Click on **"Add New... -\> Project"** and import the repository from GitHub.
4.  **Configure the Project:**
      * Vercel will likely detect the frontend framework (React/Vite). Set the **Root Directory** to `frontend`.
      * Go to the **Environment Variables** section in the project settings.
      * Add the same environment variables that you defined in your `backend/.env` file (`MONGO_URI`, `JWT_SECRET`).
5.  Click **"Deploy"**. Vercel will build and deploy your application, providing you with a live URL.

*Note: For a MERN stack app on Vercel, your Express API should be configured as serverless functions. Ensure your `vercel.json` file is set up correctly for this.*

-----

## 🤝 Contributing

Contributions are welcome\! If you have suggestions for improvements or want to fix a bug, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

-----

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

-----

## 🙏 Acknowledgements

A huge thank you to the creators of Socket.IO for enabling real-time web development to be so accessible and powerful.
