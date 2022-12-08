const { Router } = require('express')
const router = Router() //Obtener la función Router
const { check } = require('express-validator');
const {getRoles, postRoles, putRoles, deleteRoles} = require("../controllers/roles")
const { validarCampos } = require('../middlewares/validar-campos')
//router.post('/', postUsuarios)
router.get('/', getRoles)
router.put('/', putRoles)
router.delete('/', deleteRoles)

router.post('/', [
  check("nombre","el nombre es obligatorio").not().isEmpty(),
  check("permisos", "el permiso es obligatorio").isIn([
    "CONFIGURACION" ,
    "ROLES",
    "PEDIDOS"
]),  
  validarCampos
],postRoles)
    
module.exports = router