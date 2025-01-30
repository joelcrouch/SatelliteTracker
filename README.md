# Satellite Tracker

A satellite tracking web application that uses React (with Vite) on the frontend and an Express server with TypeScript on the backend to display satellite information in real-time, including their positions and velocities.

## Table of Contents

1. [Project Setup](#project-setup)
2. [Frontend (React + Vite)](#frontend-react-vite)
3. [Backend (Express + TypeScript)](#backend-express-typescript)
4. [API Key Setup](#api-key-setup)
5. [Running the App](#running-the-app)
6. [Milestones](#milestones)
7. [Technologies](#technologies)

## Project Setup

Follow these steps to set up the project locally, errr, here is how to make this app.  
Setting it up and using it are two different things.  This will just be served on the web.

### Frontend

1. **Initialize the React app with Vite**:

   ```bash
   npm create vite@latest satellite-tracker --template react-ts
   cd satellite-tracker
   npm install
   ```

Install additional libraries:

    npm install axios react-leaflet leaflet

    Create Components:
        Create the following components in the src/components folder:
            SearchBar.tsx
            SatelliteDetails.tsx
            Map.tsx

    Update App.tsx: Replace the contents of src/App.tsx with logic to integrate the components and fetch satellite data.

    Configure Proxy: Add a proxy configuration in vite.config.ts to route API calls to the backend server.

Backend

    Initialize the backend project:

mkdir satellite-backend
cd satellite-backend
npm init -y
npm install express axios cors typescript @types/express @types/node

Create index.ts: Set up the Express server to fetch satellite data using the N2YO API.

Run the backend server:

    npx tsc
    node dist/index.js

API Key Setup

To use the N2YO API, you'll need an API key. Follow these steps:

    Go to N2YO and create an account.
    Obtain the API key and replace YOUR_API_KEY in the index.ts file in the backend.

const response = await axios.get(`https://api.n2yo.com/rest/v1/satellite/positions/${id}/0/0/0/1/?apiKey=YOUR_API_KEY`);

Running the App

    Frontend:

    To run the React frontend, use:

npm run dev

The app will be accessible at http://localhost:5173.

Backend:

Start the backend server:

    node dist/index.js

    The backend server will be running at http://localhost:5000.

    Access the App: Open the frontend at http://localhost:5173 and start interacting with the satellite tracker.

Milestones
Milestone 1: Basic Setup

Initialize frontend React app with Vite and TypeScript
Install necessary libraries (axios, react-leaflet, leaflet)
Set up backend with Express and TypeScript

    Create a basic proxy setup in vite.config.ts

Milestone 2: Core Functionality

Implement SearchBar.tsx for searching satellite by ID
Implement SatelliteDetails.tsx to display satellite information
Implement Map.tsx using react-leaflet to show satellite location

    Connect frontend with backend to fetch satellite data

Milestone 3: API Integration

Obtain API key from N2YO
Implement the backend to fetch satellite positions from N2YO API

    Set up caching mechanism in the backend to avoid redundant API calls

Milestone 4: Deployment & Testing

Deploy the backend to a cloud platform (e.g., Heroku, AWS)
Deploy the frontend to a hosting service (e.g., Vercel, Netlify)

    Test the full end-to-end integration

Milestone 5: Enhancements (Optional)

Add satellite search autocomplete
Implement error handling and loading states
Optimize the frontend for mobile devices

    Add additional satellite data (e.g., altitude, orbital period)

Technologies

    Frontend: React, Vite, TypeScript, Axios, React-Leaflet, Leaflet
    Backend: Node.js, Express, TypeScript, Axios
    API: N2YO Satellite API
    Map: Leaflet via React-Leaflet
    Development Tools: Vite, TypeScript, Express, Axios, Node.js
