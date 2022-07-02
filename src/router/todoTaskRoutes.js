const router = require("express").Router()
const controller = require('../controller/todoTaskController')

router
.post('/', controller.createTodoTask)
.get('/', controller.getAllTodoTasks)
.put('/:id', controller.updateTodoTask)
.delete('/:id', controller.detelTodoTasks)

module.exports = router