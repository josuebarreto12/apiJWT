const {response} = require("express")
const Usuarios = require("../models/usuarios")
const bcrypt = require("bcryptjs")
const getUsuarios = async(req, res = response) => {

    const usuarios = await Usuarios.find()
    res.json({
        msg : "GET API USUARIOS ",
        usuarios
    })
}



const postUsuarios = async(req, res) => {
    const {nombre , correo, contrasena, rol, estado} = req.body
    const usuarios = new Usuarios({nombre , correo, contrasena, rol, estado})
    usuarios.contrasena = bcrypt.hashSync(contrasena, 10)
    await usuarios.save()
    res.json({
        msg : "POST API USUARIOS ",
        usuarios
    })
}


const putUsuarios = async (req, res) => {
    //Desestructuracion
    const { nombre, correo, contrasena, rol, estado } = req.body
    const usuario = await Usuarios.findOneAndUpdate({ nombre: nombre },{correo:correo,contrasena:bcrypt.hashSync(contrasena,10),rol:rol,estado:estado})
    
    res.json({
        msg: "PUT API Usuario",
        usuario
    })
}


const deleteUsuarios = async (req, res) => {
    const { correo } = req.query

    const usuario = await Usuarios.findOneAndDelete({ correo: correo })
    res.json({
        msg: 'DELETE API Usuario',
        usuario
    })
}

module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
   
}