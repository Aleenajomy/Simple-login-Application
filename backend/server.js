require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const rateLimit = require('express-rate-limit');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Rate limiting to prevent brute-force attacks
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per windowMs
});

// Simulated user database with hashed password
// Password: 'admin' hashed with bcrypt
const users = {
    admin: '$2b$10$8Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9uK9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9'
};

// Pre-hash the admin password for demo purposes
(async () => {
    users.admin = await bcrypt.hash('admin', 10);
})();

app.post('/login', loginLimiter, async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    
    const userPasswordHash = users[username];
    
    if (userPasswordHash && await bcrypt.compare(password, userPasswordHash)) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
