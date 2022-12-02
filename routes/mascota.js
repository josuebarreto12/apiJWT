const { Router } = require("express")
const router = Router()

const {getMascota,postMascota, deleteMascota, putMascota,patchMascota,getPromedioMascota, getMinMaxMascota,getPesoEntreRango, getMascotaNombre} = require("../controllers/mascota")

router.post('/', postMascota)
router.get('/', getMascota)
router.delete('/', deleteMascota)
router.put('/', putMascota)
router.patch('/', patchMascota)
router.get('/promedio', getPromedioMascota)
router.get('/minmax', getMinMaxMascota)
router.get('/pesoentrerango', getPesoEntreRango)
router.get('/mascotanombre', getMascotaNombre)

module.exports = router;