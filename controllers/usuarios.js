const {response} = require("express")
const Usuarios = require("../models/usuarios")

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
    await usuarios.save()
    res.json({
        msg : "POST API USUARIOS ",
        usuarios
    })
}


module.exports = {
    getUsuarios,
    postUsuarios,
   
}