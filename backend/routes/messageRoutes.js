const express = require('express');
const router = express.Router();
const {
  getMessages,
  getMessageById,
  createMessage,
  markAsRead,
  deleteMessage,
} = require('../controllers/messageController');
const { protect, admin } = require('../middleware/auth');
const { validateMessage } = require('../middleware/validation');

router.route('/')
  .get(protect, admin, getMessages)
  .post(validateMessage, createMessage);

router.route('/:id')
  .get(protect, admin, getMessageById)
  .delete(protect, admin, deleteMessage);

router.route('/:id/read')
  .put(protect, admin, markAsRead);

module.exports = router;
