const mongoose = require('mongoose')

const dbCon = async () => {
    try {
        const con = await mongoose.connect(process.env.DB_URI)    
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
    

} 

module.exports = { dbCon }