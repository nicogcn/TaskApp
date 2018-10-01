var express = require('express');
var router = express.Router();
var controller = require("../controllers/taskController");

router.use(function (req, res, next) {
  console.log('Get request at:', Date.now());
  next();
});

//Declaro las acciones
router.get('/',controller.getAllTasks);

router.get('/:id',controller.getTaskById);

router.post('/',controller.createTask);

router.put('/:id',controller.updateTask);

router.delete('/:id',controller.deleteTask);

module.exports = router