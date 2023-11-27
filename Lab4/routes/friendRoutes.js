const express = require("express");
const router = express.Router();
const friends = require('../models/friends');

// Default endpoint: Get all friends
router.get('/', (req, res) => {
    res.json(friends);
});

// Filter endpoint: Get friends based on gender and/or starting letter
router.get('/filter', (req, res) => {
    const filterGender = req.query.gender;
    const filterLetter = req.query.letter;
    let matchingFriends = [...friends];

    // Filter by gender if specified
    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender === filterGender);
    }

    // Filter by starting letter of name if specified
    if (filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.startsWith(filterLetter));
    }

    if (matchingFriends.length > 0) {
        res.status(200).json(matchingFriends);
    } else {
        res.status(404).json({ error: "No friends matching the specified criteria." });
    }
});

// Info endpoint: Get user-agent, content-type, and accept headers
router.get('/info', (req, res) => {
    const { headers } = req;
    const { 'user-agent': userAgent, 'content-type': contentType, accept } = headers;
    res.json({ userAgent, contentType, accept });
});

// Dynamic GET endpoint: Get a single friend by ID
router.get('/:id', (req, res) => {
    const friendId = req.params.id;
    const friend = friends.find(friend => friend.id === parseInt(friendId));

    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({ error: "Friend not found." });
    }
});

// Add a new friend
router.post('/', (req, res) => {
    const newFriend = req.body;

    if (!newFriend.name || !newFriend.gender) {
        res.status(400).json({ error: 'Friend object must contain a name and gender' });
    } else if (!newFriend.id) {
        newFriend.id = friends.length + 1;
        friends.push(newFriend);
        res.status(200).json(newFriend);
    }
});

// Update an existing friend by ID
router.put('/:id', (req, res) => {
    const friendId = req.params.id;
    const updatedFriend = req.body;
    const index = friends.findIndex(friend => friend.id === parseInt(friendId));

    if (index !== -1) {
        friends[index] = updatedFriend;
        res.status(200).json({ result: 'Updated friend with ID ' + friendId, data: updatedFriend });
    } else {
        res.status(404).json({ error: "Friend not found." });
    }
});

module.exports = router;
