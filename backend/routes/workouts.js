const express = require('express')
const {
  createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout
} = require('../controllers/workoutControllers')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

//Get a single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//Update a workout
router.patch('/:id', updateWorkout)

module.exports = router 