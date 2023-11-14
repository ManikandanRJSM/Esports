const express = require('express')


const home = async(req, res) => {
    res.status(200)
    res.json({ status_code : '1', message : 'this is the landing page', data : {} })
}

module.exports = { home }