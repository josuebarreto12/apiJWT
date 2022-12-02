const {Schema, model} = require('mongoose')
const MascotaSchema = Schema({
    nombre : {
        type : String
    },
    raza : {
        type : String
    },
    peso : {
        type : Number
    }
})
module.exports = model("Mascota", MascotaSchema)