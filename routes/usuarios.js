const { Router } = require('express')
const router = Router() //Obtener la función Router

const {getUsuarios, postUsuarios} = require("../controllers/usuarios")
router.post('/', postUsuarios)
router.get('/', getUsuarios)


    
module.exports = router