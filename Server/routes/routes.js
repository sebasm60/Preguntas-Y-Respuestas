const {Router} = require('express');
const router = Router();
const controller = require('../controller/controllerPreguntas');

router.get('/preguntas', controller.obtenerPreguntas);
router.get('/respuestas', controller.obtenerRespuestas);
router.get('/historial', controller.historial);
router.post('/guardar', controller.guardar);

module.exports = router;