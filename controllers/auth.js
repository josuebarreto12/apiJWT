
const { generarJWT } = require("../helpers/generar-jwt")
const Usuarios = require("../models/usuarios")
const bcrypt = require("bcryptjs")


const login = async (req, res) => {
    const {correo, contrasena} = req.body
    try {
        const usuarios = await Usuarios.findOne({correo})
        if(!usuarios) {
            return res.status(400).json({
                msg: "correo no encontrado"
            })
        }        
        if(usuarios.estado === false) {
            return res.json({msg :  "el usuario esta inactivo"})
        }
        //if(usuarios.contrasena !== contrasena) {
        if(!bcrypt.compare(usuarios.contrasena, contrasena)) { 
            return res.status(400).json({
                msg: "contraseña incorrecta"
            })
        }
        //generar json web token
        const token = await generarJWT(usuarios.id)
        return res.json({
            token,
            usuarios
        })
    }
    catch(err) {
        return res.status(400).json({
            msg: "contacte el administrador"
        })
    }
}


module.exports = {
 login
   
}