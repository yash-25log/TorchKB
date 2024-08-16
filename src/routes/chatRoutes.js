const express = require('express');
const { getChatHistory, addChatMessage } = require('../controllers/chatController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/history', authMiddleware, getChatHistory);
router.post('/add', authMiddleware, addChatMessage);

module.exports = router;
