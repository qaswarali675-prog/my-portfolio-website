const express = require('express');
const router = express.Router();
const {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} = require('../controllers/serviceController');
const { protect, admin } = require('../middleware/auth');
const { validateService } = require('../middleware/validation');

router.route('/')
  .get(getServices)
  .post(protect, admin, validateService, createService);

router.route('/:id')
  .get(getServiceById)
  .put(protect, admin, validateService, updateService)
  .delete(protect, admin, deleteService);

module.exports = router;
