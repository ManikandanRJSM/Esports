const express = require('express')
const { home } = require('../controllers/home')

const route = express.Router()

route.get('/', home)

module.exports = route