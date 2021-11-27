// const { getAll } = require("../models/user");
const Sesion = require("../models/sesion");
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports = {
    // async getAll(req, res, next) {
    //     try {
    //         const data = await User.getAll();
    //         console.log(`Usuarios: ${data}`);
    //         return res.status(200).json(data);
    //     } catch (error) {
    //         console.log(`Error: ${error}`);
    //         return res.status(501).json({
    //             success: false,
    //             message: "Error al obtener los usuarios",
    //         });
    //     }
    // },

    async register(req, res, next) {
        try {
            const sesion = req.body;
            console.log('Emil duda de mí')
            const data = await Sesion.create(sesion);
            return res.status(201).json({
                success: true,
                message: 'Se registro con exito la sesion',
                data: data.idSesion
            })
        } catch (error) {
            console.log(`Error: ${error}`)
            return res.status(501).json({
                success: false,
                message: 'Hubo un error con el registro de la sesion',
                error: error
            })
        }
    },


    async actualizar(req, res, next) {
        try {
            const sesion = req.body;
            console.log('Emil duda de mí')
            const data = await Sesion.update(sesion);
            return res.status(201).json({
                success: true,
                message: 'Se registro con exito la hora de cierre',
                data: data.idSesion
            })
        } catch (error) {
            console.log(`Error: ${error}`)
            return res.status(501).json({
                success: false,
                message: 'Hubo un error con el registro de la hora de cierre',
                error: error
            })
        }
    },
    // async login(req, res, next) {
    //     try {
    //         const username = req.body.username;
    //         const password = req.body.password;

    //         const myUser = await User.findByUserName(username);

    //         if (!myUser) {
    //             return res.status(401).json({
    //                 success: false,
    //                 message: 'El usuario no fue encontrado'
    //             })
    //         }

    //         if (User.isPasswordMatched(password, myUser.password)) {
    //             const token = jwt.sign({
    //                 idUser: myUser.idUser,
    //                 username: myUser.username
    //             }, keys.secretOrKey, {});

    //             const data = {
    //                 idUser: myUser.idUser,
    //                 username: myUser.username,
    //                 name: myUser.name,
    //                 lastname: myUser.lastname,
    //                 password: myUser.password,
    //                 session_token: `JWT ${token}`,
    //             }

    //             return res.status(201).json({
    //                 success: true,
    //                 data: data,
    //                 message: 'El usuario ha sido autenticado'
    //             });
    //         } else {
    //             return res.status(401).json({
    //                 success: false,
    //                 message: 'La contraseña es incorrecta',
    //             });
    //         }


    //     } catch (error) {
    //         console.log(`Error: ${error}`);
    //         return res.status(501).json({
    //             success: false,
    //             message: 'Error al momento de hacer login',
    //             error: error
    //         });

    //     }
    // },
};
