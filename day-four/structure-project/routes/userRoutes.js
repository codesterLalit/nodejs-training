// routes/userRoutes.js
const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser);

module.exports = router;
