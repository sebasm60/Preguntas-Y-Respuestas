controller = {};
const { cnn_mysql } = require('../settings/BdConnection');

controller.obtenerPreguntas = async(req, res) => {
    try {
        const rows = await cnn_mysql.promise().execute(`SELECT * FROM preguntas`);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).send(error);
    }
}

controller.obtenerRespuestas = async(req, res) => {
    try {
        const rows = await cnn_mysql.promise().execute(`SELECT * FROM respuestas`);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).send(error);
    }
}

controller.historial = async(req, res) => {
    try {
        const rows = await cnn_mysql.promise().execute(`SELECT * FROM historial`);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).send(error);
    }
}

controller.guardar = async(req, res) => {
    try {
        const newAccount = { nombre, puntos } = req.body;
        await cnn_mysql.promise()
        .execute(`INSERT INTO historial (nombre, puntos) VALUES (?, ?)`,
        [nombre, puntos]);
        res.json(newAccount);        
    } catch (error) {
        res.send({status : 404, message : error.message, code : error.code});
    };
}

module.exports = controller;