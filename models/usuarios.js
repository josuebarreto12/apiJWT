const {Schema, model} = require('mongoose')
const UsuariosSchema = Schema({
    nombre : {
        type : String,
        required : [true, "El nombre es obligatorio"]
    },
    correo : {
        type : String,
        required: [true, "El correo es obligatorio"],
        unique : true
    },
    contrasena : {
        type : String,
        required : [true, "La contraseña es obligatoria"]
    },    
    rol :{   
        type : String,
        required : [true,"el rol es obligatorio"],
        enum : [
            "ADMIN" ,
            "ASESOR"
        ]       
    },
    estado : {
        type : Boolean,
        default : true
    }
})
module.exports = model("Usuarios", UsuariosSchema)