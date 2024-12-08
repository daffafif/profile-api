const express = require('express');
const router = express.Router();

let userProfile = {
    fullName: '',
    gender: '',
    age: ''
};

// Get user profile
router.get('/', (req, res) => {
    res.json(userProfile);
});

// Update user profile
router.post('/', (req, res) => {
    const { fullName, gender, age } = req.body;
    userProfile = { fullName, gender, age };
    res.json(userProfile);
});

module.exports = router;
