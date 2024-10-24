const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projects.controller');

router.post('/', projectController.createProject);
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getOneProject);
router.patch('/:id', projectController.editProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;
