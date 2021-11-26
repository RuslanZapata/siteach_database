const UsersController = require('../controllers/usersController');

module.exports = (app) => {
    //GET
    app.get('/api/users/getAll', UsersController.getAll)

    //POS
    app.post('/api/users/create', UsersController.register)
    app.post('/api/users/login', UsersController.login)
}
