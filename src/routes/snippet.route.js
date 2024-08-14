const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1];
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

router.get('/snippets', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user).populate('snippets');
  res.json(user.snippets);
});

router.post('/snippets', authMiddleware, async (req, res) => {
  const { text, url } = req.body;
  const snippet = new Snippet({ text, url, user: req.user });
  await snippet.save();
  res.json(snippet);
});
