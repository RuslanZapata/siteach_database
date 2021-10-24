// const { getAll } = require("../models/user");
const User = require("../models/user");

module.exports = {
    async getAll(req, res, next) {
        try {
            const data = await User.getAll();
            console.log(`Usuarios: ${data}`);
            return res.status(200).json(data);
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: "Error al obtener los usuarios",
            });
        }
    },

    async register(req, res, next) {
        try {
            const user = req.body;
            console.log('Emil duda de mí')
            const data = await User.create(user);
            return res.status(201).json({
                success: true,
                message: 'El reguistro se realizo correctamente',
                data: data.id
            })
        } catch (error) {
            console.log(`Error: ${error}`)
            return res.status(501).json({
                success: false,
                message: 'Hubo un error con el registro del usuario',
                error: error
            })
        }
    }
};
