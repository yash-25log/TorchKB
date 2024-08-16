const Summarization = require('../models/Summarization');

exports.createSummarization = async (req, res) => {
  try {
    const { summary, documentUrl } = req.body;
    const newSummary = new Summarization({
      userId: req.user._id,
      summary,
      documentUrl,
    });
    await newSummary.save();
    res.status(201).json(newSummary);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create summarization' });
  }
};

exports.getSummarizationHistory = async (req, res) => {
  try {
    const summaries = await Summarization.find({ userId: req.user._id });
    res.status(200).json(summaries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch summarization history' });
  }
};
