// Backend: index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
console.log("HOST:", process.env.DB_HOST);
const app = express();
const PORT = process.env.PORT || 5000;

// Update this part:
app.use(cors());

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Kodbank API is running...');
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;