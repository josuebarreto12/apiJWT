const {response} = require("express")
const Clientes = require("../models/clientes")
const bcrypt = require("bcryptjs")
const getClientes = async(req, res = response) => {

    const clientes = await Clientes.find()
    res.json({
        msg : "GET API CLIENTES ",
        clientes
    })
}



const postClientes = async(req, res) => {
    const {documento , nombre, apellido, telefono, estado} = req.body
    const clientes = new Clientes({documento , nombre, apellido, telefono, estado})    
    await clientes.save()
    res.json({
        msg : "POST API Clientes ",
        clientes
    })
}


const putClientes = async (req, res) => {
    //Desestructuracion
    const {documento , nombre, apellido, telefono, estado} = req.body
    const clientes = await Clientes.findOneAndUpdate({ nombre: nombre },{documento: documento, apellido : apellido, telefono : telefono ,estado : estado})
    
    res.json({
        msg: "PUT API CLIENTES",
        clientes
    })
}


const deleteClientes = async (req, res) => {
    const { documento } = req.query

    const clientes = await Clientes.findOneAndDelete({ documento: documento })//ANTES DE LOS DOS PUNTOS ES PARAMETRO Y DESPUES DE LOS DOS PUNTOS ES LA VARIABLE

    res.json({
        msg: 'DELETE API CLIENTES',
        clientes
    })
}

module.exports = {
    getClientes,
    postClientes,
    putClientes,
    deleteClientes
   
}