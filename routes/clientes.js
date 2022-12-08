const { Router } = require('express')
const router = Router() //Obtener la función Router
const { check } = require('express-validator');
const {getClientes, postClientes, putClientes, deleteClientes} = require("../controllers/clientes")
const { validarCampos } = require('../middlewares/validar-campos')
//router.post('/', postUsuarios)
router.get('/', getClientes)
router.put('/', putClientes)
router.delete('/', deleteClientes)

router.post('/', [
  check("documento","el documento es obligatorio").isLength({min : 6 ,max : 12}),
  check("nombre", "el nombre es obligatorio").not().isEmpty(),
  check("apellido", "el apellido es obligatorio").not().isEmpty(),
  check("telefono", "el telefono es de maximo 10 numeros").isLength({max : 10}),
  validarCampos
],postClientes)
    
module.exports = router