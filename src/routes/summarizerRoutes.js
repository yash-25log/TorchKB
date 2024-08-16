const express = require('express');
const { createSummarization, getSummarizationHistory } = require('../controllers/summarizerController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/generate', authMiddleware, createSummarization);
router.get('/history', authMiddleware, getSummarizationHistory);

module.exports = router;
