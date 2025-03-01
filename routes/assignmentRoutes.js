const express = require('express');
const router = express.Router();
const authMiddleware = require('../config/authMiddleware');
const assignmentController = require('../controllers/assignmentController');
const multer = require('multer');

const storage = multer.memoryStorage();  
const upload = multer({ storage: storage });

router.post('/upload', authMiddleware, upload.single('file'), assignmentController.uploadAssignment);

router.get('/view', authMiddleware, assignmentController.viewAssignments);
router.put('/review', authMiddleware, assignmentController.reviewAssignment);

module.exports = router;
