const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const UserController = require('./controllers/UserController'); // Ajuste o caminho conforme necessário

const routes = express.Router();

routes.post('/signup', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
}), UserController.store);

module.exports = routes;
