const UsersController = require('../controllers/usersController');

module.exports = (app) => {
    //GET
    app.get('/api/users/getAll', UsersController.getAll)

    //POS
    app.post('/api/users/create', UsersController.register)
}
