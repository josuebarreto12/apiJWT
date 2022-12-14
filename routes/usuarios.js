const { Router } = require('express')
const router = Router() //Obtener la función Router
const { check } = require('express-validator');
const {getUsuarios, postUsuarios, putUsuarios, deleteUsuarios} = require("../controllers/usuarios")
const { validarCampos } = require('../middlewares/validar-campos')
//router.post('/', postUsuarios)
router.get('/', getUsuarios)
router.put('/', putUsuarios)
router.delete('/', deleteUsuarios)

router.post('/', [
  check("nombre","el nombre es obligatorio").not().isEmpty(),
  check("contrasena", "la contrasena debe tener almenos 4 caracteres").isLength({min: 5}),
  check("rol", "no es un rol valido").isIn(["ADMIN", "ASESOR"]),
  validarCampos
],postUsuarios)
    
module.exports = router