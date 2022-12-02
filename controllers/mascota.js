const {response} = require("express")
const Mascota = require("../models/mascota")

const getMascota = async(req, res = response) => {
    //const {nombre, raza, peso} = req.query
    const mascota = await Mascota.find()
    res.json({
        msg : "GET API MASCOTA ",
        mascota
    })
}
const getPromedioMascota = async(req, res = response) => {
    const mascota = await Mascota.find()
    suma = 0
    for (let index = 0; index < mascota.length; index++) {
        suma += mascota[index].peso        
    }
    suma = suma/mascota.length
    suma = parseFloat(suma.toFixed(2))
    res.json({
        msg : "GET PROMEDIO API MASCOTA ",
        suma
    })
}
const getMinMaxMascota = async(req, res = response) => {
    const mascota = await Mascota.find()
    max = 0
    min = 9**100
    for (let index = 0; index < mascota.length; index++) {
        if(max < mascota[index].peso){
            max = mascota[index].peso
        }        
        if(min > mascota[index].peso){
            min = mascota[index].peso
        }        
    }
    res.json({
        msg : "GET MIN MAX  API MASCOTA ",
        max,
        min
    })
}
const getPesoEntreRango = async(req, res = response) => {
    const mascota = await Mascota.find()
    cantMascota = 0
    for (let index = 0; index < mascota.length; index++) {
        if(mascota[index].peso >= 18 && mascota[index].peso <= 91){
            cantMascota++
        }        
        
    }
    res.json({
        msg : "GET PESOENTRERANGO API MASCOTA ",
        cantMascota
    })
}
const getMascotaNombre = async(req, res = response) => {
    const {nombre} = req.query
    const mascota = await Mascota.find({nombre : nombre})
  
    res.json({
        msg : "GET MASCTO NOMBRE API MASCOTA ",
        mascota
    })
}
const postMascota = async(req, res) => {
    const {nombre , raza, peso} = req.body
    const mascota = new Mascota({nombre, raza, peso})
    await mascota.save()
    res.json({
        msg : "GET API MASCOTA ",
        mascota
    })
}
const deleteMascota = async(req, res) => {
    const {nombre} = req.query
    const mascota = await Mascota.findOneAndDelete({nombre : nombre})
    res.json({
        msg : "DELETE API MASCOTA",
        mascota
    })
}
const putMascota = async(req, res) => { 
    const {nombre,raza, peso} = req.body
    const mascota = await Mascota.findOneAndUpdate({nombre : nombre},{raza : raza, peso : peso})
    res.json({
        msg : "PUT API MASCOTA",
        mascota
    })
}
const patchMascota = async(req, res) => { 
    const {nombre, peso} = req.body
    const mascota = await Mascota.findOneAndUpdate({nombre : nombre},{peso : peso})
    res.json({
        msg : "PATCH API MASCOTA",
        mascota
    })
}
module.exports = {
    getMascota,
    postMascota,
    deleteMascota,
    putMascota,
    patchMascota,
    getPromedioMascota,
    getMinMaxMascota,
    getPesoEntreRango,
    getMascotaNombre
}