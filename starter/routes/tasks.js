const express = require('express')
const router = express.Router()

const {
    getTasks,
    getThatTask,
    createTask,
    updateTask,
    deleteTask
}                = require('../controllers/tasks')

router.route('/').get(getTasks).post(createTask)
router.route('/:id').get(getThatTask).patch(updateTask).delete(deleteTask)

module.exports= router