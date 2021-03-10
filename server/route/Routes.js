const express = require('express');
const bodyParser = require('body-parser');
const controller = require("../controllers/controller");
const jsonParser = bodyParser.json();

const router = express.Router();

router.post('/api/login', jsonParser, controller.loginUser);

router.post('/api/register', jsonParser, controller.registerUser);

router.post('/api/create', controller.verify, controller.addJourney);

router.get('/api/content', controller.getContent);

router.get('/api/authContent', controller.verify, controller.getAuthContent)

router.delete('/api/delete/:id', controller.verify, controller.deleteJourney);

router.put('/api/update/:id/:pass', controller.verify, controller.updateJourney);

router.get('/api/download/:filename', controller.sendFile);

router.get('/api/getName', controller.verify, controller.getName);

module.exports = router;
