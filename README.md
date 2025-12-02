# W34 - Clean Energy Application

A full-stack web application showcasing recent innovations in Clean Energy, built with Angular, Node.js, Express, and MongoDB.

**Live Demo:** http://167.172.151.210 (when deployed)  
**Developer:** Willis Reid  
**Student ID:** 801099534

## Project Overview

This Single Page Application (SPA) demonstrates Clean Energy innovations, specifically focusing on Schneider Electric's One Digital Grid Platform. The application features:
- JWT-based authentication
- Dynamic data visualizations using Chart.js
- RESTful API backend
- MongoDB database for chart data storage
- Accessible UI following WCAG guidelines

## Tech Stack

- **Frontend:** Angular 20.3 (TypeScript)
- **Backend:** Node.js with Express (TypeScript)
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Charts:** Chart.js
- **Server:** NGINX (production) / http-server (development)

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally or remote connection)
- npm or yarn package manager

## Local Development Setup

### 1. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
npm install -g http-server
```

### 2. Configure Environment

The backend uses MongoDB. Default configuration in `backend/src/config.ts`:
- Port: 3000
- MongoDB URI: mongodb://127.0.0.1:27017/SchneiderElectric
- JWT Secret: dev-secret

### 3. Seed the Database

```bash
cd backend
npm run seed
```

This will populate MongoDB with chart data for Summary and Reports pages.

### 4. Start the Backend

```bash
cd backend
npm run dev
```

Backend will run on **http://localhost:3000**

### 5. Build and Serve the Frontend

**Build the Angular app:**
```bash
cd frontend
npm run build
```

**Serve the built files:**
```bash
cd dist/frontend/browser
http-server -p 4200 -c-1
```

Frontend will run on **http://localhost:4200**

### 6. Access the Application

Open your browser to **http://localhost:4200**

**Login Credentials:**
- Username: `willis`
- Password: `willis`

## Project Structure

```
w34/
├── backend/
│   ├── src/
│   │   ├── config.ts              # Configuration
│   │   ├── index.ts               # Express app entry point
│   │   ├── middleware/
│   │   │   └── auth.middleware.ts # JWT authentication
│   │   ├── models/
│   │   │   └── chart.model.ts     # MongoDB chart schema
│   │   ├── routes/
│   │   │   ├── auth.routes.ts     # Login endpoint
│   │   │   └── chart.routes.ts    # Chart data endpoints
│   │   └── seed/
│   │       └── seedCharts.ts      # Database seeder
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/
│   │   │   │   ├── auth/          # Auth service, guard, interceptor
│   │   │   │   └── chart.service.ts
│   │   │   ├── pages/
│   │   │   │   ├── dashboard/     # Dashboard page
│   │   │   │   ├── login/         # Login page
│   │   │   │   ├── reports/       # Reports with chart
│   │   │   │   └── summary/       # Summary with chart
│   │   │   ├── app.ts             # Root component
│   │   │   ├── app.routes.ts      # Routing configuration
│   │   │   └── app.config.ts      # App configuration
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.css
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login with username/password, returns JWT token

### Charts (Protected - requires JWT)
- `GET /api/charts/summary` - Get summary chart data
- `GET /api/charts/reports` - Get reports chart data

### Health Check
- `GET /api/health` - Server health check

## Features

1. **Authentication & Authorization**
   - JWT-based authentication
   - Protected routes using auth guards
   - HTTP interceptor for automatic token inclusion

2. **Dashboard**
   - 200-word summary of Schneider Electric's One Digital Grid Platform
   - Technical overview of the application stack
   - Reference to source material

3. **Dynamic Charts**
   - Summary page: Bar chart showing operational improvements
   - Reports page: Line chart showing business impact
   - Data fetched asynchronously from backend via JWT-protected endpoints

4. **Accessibility**
   - ARIA labels and roles
   - Screen reader support
   - Semantic HTML
   - Keyboard navigation

## Deployment

For production deployment on DigitalOcean with NGINX:

1. Push code to GitHub (excluding node_modules, .env)
2. SSH into your droplet: `ssh root@167.172.151.210`
3. Clone the repository
4. Install dependencies and build both frontend and backend
5. Configure NGINX to serve frontend on port 80
6. Use PM2 to run backend on port 3000
7. Configure MongoDB connection
8. Seed the database

## Troubleshooting

**Frontend not loading:**
- Ensure backend is running on port 3000
- Check that MongoDB is running and accessible
- Hard refresh browser (Ctrl+Shift+R)

**Login fails:**
- Verify username and password are both `willis` (lowercase)
- Check backend logs for JWT errors
- Ensure backend environment is configured correctly

**Charts not displaying:**
- Logout and login again to get fresh JWT token
- Check browser console for HTTP errors
- Verify database has been seeded with `npm run seed`
- Ensure backend middleware is properly configured

## Source & References

**Clean Energy Innovation Source:**
Schneider Electric's One Digital Grid Platform demonstrates significant innovations in grid modernization and clean energy management.

**Chart Data Based On:**
- Forrester Total Economic Impact Study for Schneider Electric
- Schneider Electric case studies and white papers on grid digitalization

## License

This project is created for educational purposes as part of a university final project.
