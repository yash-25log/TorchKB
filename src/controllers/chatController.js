const Chat = require('../models/Chat');

exports.getChatHistory = async (req, res) => {
  try {
    const chatHistory = await Chat.find({ userId: req.user._id });
    res.status(200).json({ history: chatHistory });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chat history' });
  }
};

exports.addChatMessage = async (req, res) => {
  try {
    const { message } = req.body;
    let chat = await Chat.findOne({ userId: req.user._id });

    if (!chat) {
      chat = new Chat({ userId: req.user._id, messages: [] });
    }

    chat.messages.push({ message });
    await chat.save();
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add chat message' });
  }
};
