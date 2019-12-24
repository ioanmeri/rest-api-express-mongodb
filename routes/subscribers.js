const express = require('express')
const router = express.Router()

// Getting all
router.get('/', (req, res) => {
  res.send('Hellow World')
})
// Getting one
router.get('/:id', (req, res) => {
  res.send(req.params.id)
})
// Creating one
router.post('/', (req, res) => {
  req.params.id
})

// Updating one
router.patch('/:id', (req, res) => {
  
})

// Deleting one
router.delete('/:id', (req, res) => {
  
})
module.exports = router