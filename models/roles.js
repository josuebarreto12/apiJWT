const {Schema, model} = require('mongoose')
const RolesSchema = Schema({
    nombre : {
        type : String,
        required : [true, "El nombre es obligatorio"],
        unique : true
    },
    permisos : {
        type : String,
        required: [true, "al menos un permio es obligatorio"],
        enum : [
            "CONFIGURACION" ,
            "ROLES",
            "PEDIDOS"
        ]             
    }
})
module.exports = model("Roles", RolesSchema)