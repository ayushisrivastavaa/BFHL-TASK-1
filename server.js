const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running successfully!');
});

// Sample GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

// Sample POST endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    
    // Validate data is an array
    if (!Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: 'Invalid input format, expected an array.'
        });
    }

    // Process data: separate numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && typeof item === 'string');
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.sort().slice(-1);

    res.json({
        is_success: true,
        user_id: "yash17052003", // Replace with actual user_id format
        email: "yash.darshan2021@vitbhopal.ac.in", // Replace with actual email
        roll_number: "21BCE11059", // Replace with actual roll number
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
