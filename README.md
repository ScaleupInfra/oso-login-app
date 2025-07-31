# Oso Authenticated Modern Blog App

This project demonstrates a modern full-stack web application using:

- **Express.js** backend with Oso Cloud for authorization
- **React** frontend (with Vite) for a beautiful, modern UI

## Features
- Secure login page: users log in with a username and password
- Backend uses Oso Cloud to authorize users
- On successful login, users see a modern, responsive blog page with sample articles
- Clean, professional design (no yellow backgrounds!)
- Logout functionality

## How to Run

1. **Install dependencies**
   - Backend: `npm install` (in the root folder)
   - Frontend: `cd client && npm install`
2. **Start the backend**
   - From the root: `node main.js`
3. **Start the frontend**
   - From `client`: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure
- `main.js` — Express backend with Oso Cloud integration
- `client/` — React frontend (Vite)
- `client/src/App.jsx` — Main React app with login and blog UI
- `client/src/App.css` — Modern CSS for login and blog pages

## Customization
- Update blog articles in `App.jsx` as needed
- Adjust Oso Cloud policy and resource types in `main.js` for your use case

---
Built with ❤️ using Oso, Express, and React.
