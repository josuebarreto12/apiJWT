const {Schema, model} = require('mongoose')
const ClientesSchema = Schema({
    documento : {
        type : Number,
        required : [true, "El documento es obligatorio"],
        unique : true
    },
    nombre : {
        type : String,
        required: [true, "El nombre es obligatorio"]        
    },
    apellido : {
        type : String,
        required : [true, "el apellido es obligatoria"]
    },    
    telefono :{   
        type : Number,
        required : [true,"el numero  es obligatorio"],
        unique : true
    },
    estado : {
        type : Boolean,
        default : true
    }
})
module.exports = model("Clientes", ClientesSchema)