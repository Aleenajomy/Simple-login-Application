# Login Application

A simple login application built with React (frontend) and Node.js/Express (backend).

## Features

- Login page with username and password fields
- Navigation to Welcome page upon successful login
- Error message display for incorrect credentials
- Remember username for subsequent logins (localStorage)
- Password hashing with bcrypt
- Rate limiting to prevent brute-force attacks
- Environment variables for configuration

## Project Structure

```
Authentication/
├── backend/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── Login.js
│   │   ├── Welcome.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies (already done):
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies (already done):
   ```bash
   npm install
   ```

3. Start the React application:
   ```bash
   npm start
   ```

   The app will open in your browser at `http://localhost:3000`

## Deploying On Railway

Use **2 Railway services** from this same repo.

1. Create a `backend` service:
   - Root directory: `backend`
   - Build command: `npm install`
   - Start command: `npm start`
2. Deploy it and copy its public URL (example: `https://your-backend.up.railway.app`).
3. Create a `frontend` service:
   - Root directory: `frontend`
   - Build command: `npm install && npm run build`
   - Start command: `npm run start:railway`
4. In the `frontend` service variables, set:
   - `REACT_APP_API_URL=https://your-backend.up.railway.app`
5. Redeploy the frontend service.

Important:
- Do not use `*.railway.internal` in browser code. That internal domain is only reachable from Railway private networking, not public browsers.

## Testing the Application

### Test Credentials

- **Username**: `admin`
- **Password**: `admin`

### Test Steps

1. Open your browser and navigate to `http://localhost:3000`
2. Enter the credentials:
   - Username: `admin`
   - Password: `admin`
3. Click the "Login" button
4. You should be redirected to the Welcome page showing "Welcome, admin!"
5. Close the browser and reopen `http://localhost:3000` - the username should be pre-filled

### Test Error Handling

1. Enter incorrect credentials (e.g., username: `test`, password: `test`)
2. Click "Login"
3. You should see an error message: "Invalid credentials"

## Security Features

1. **Password Hashing**: Passwords are hashed using bcrypt before comparison
2. **Rate Limiting**: Limited to 100 login attempts per IP per 15 minutes
3. **Environment Variables**: Sensitive configuration stored in .env file
4. **CORS**: Configured to allow cross-origin requests
5. **Input Validation**: Both frontend and backend validate required fields

## API Endpoints

### POST /login

**Request Body:**
```json
{
  "username": "admin",
  "password": "admin"
}
```

**Success Response (200):**
```json
{
  "message": "Login successful"
}
```

**Error Response (401):**
```json
{
  "message": "Invalid credentials"
}
```

**Error Response (400):**
```json
{
  "message": "Username and password are required"
}
```

## Technologies Used

### Backend
- Node.js
- Express
- bcrypt (password hashing)
- express-rate-limit (rate limiting)
- cors (cross-origin resource sharing)
- body-parser (request body parsing)
- dotenv (environment variables)

### Frontend
- React (functional components & hooks)
- React Router DOM (routing)
- Axios (HTTP requests)
- localStorage (username persistence)

## Notes

- The username is stored in localStorage after successful login
- The backend uses an in-memory user database for demonstration purposes
- In production, you should use a real database and implement proper session management
- Consider implementing HTTPS for production deployment
