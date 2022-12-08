const {response} = require("express")
const Roles = require("../models/roles")
const bcrypt = require("bcryptjs")
const getRoles = async(req, res = response) => {

    const roles = await Roles.find()
    res.json({
        msg : "GET API ROLES ",
        roles
    })
}
const postRoles = async(req, res) => {
    const {nombre , permisos} = req.body
    const roles = new Roles({nombre , permisos})    
    await roles.save()
    res.json({
        msg : "POST API ROLES ",
        roles
    })
}


const putRoles = async (req, res) => {
    //Desestructuracion
    const {nombre , permisos} = req.body
    const roles = await Rol.findOneAndUpdate({ nombre: nombre },{permisos:permisos})
    
    res.json({
        msg: "PUT API ROLES",
        roles
    })
}


const deleteRoles = async (req, res) => {
    const { nombre } = req.query

    const roles = await Roles.findOneAndDelete({ nombre: nombre })

    res.json({
        msg: 'DELETE API ROLES',
        roles
    })
}

module.exports = {
    getRoles,
    postRoles,
    putRoles,
    deleteRoles
}