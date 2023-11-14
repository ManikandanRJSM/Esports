const http = require('http')
const express = require('express')
const dotenv = require('dotenv').config()
const app = new express()
const port = process.env.SERVER_PORT
const webRoutes = require('../backend/routes/web')
const asyncHandler = require('./middleware/errorHandler')
const { dbCon } = require('./confg/database')

dbCon()

app.use('/', webRoutes)

app.use(asyncHandler)


app.listen(port, () => {
    console.log(`Express server running in port ${port}`)
})
