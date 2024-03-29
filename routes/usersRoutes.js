const UsersController = require('../controllers/usersController');
const SesionController = require('../controllers/sesionController');

module.exports = (app) => {
    //GET
    app.get('/api/users/getAll', UsersController.getAll)

    //POS
    app.post('/api/users/create', UsersController.register)
    app.post('/api/users/login', UsersController.login)
    app.post('/api/session/create', SesionController.register)
    app.post('/api/session/createcierre', SesionController.registerCierre)
    app.put('/api/session/update', SesionController.actualizar)
}
