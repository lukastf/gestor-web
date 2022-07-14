const DirectMongo = require('../base/DirectMongo');
const connection = require('../base/connection');
const dm = new DirectMongo(connection);
const collection = "usuarios";

const login = async (req, res) => {

    let objLogin = {
        email: req.body.email,
        senha: req.body.senha
    }

    let response = await dm.getOne(collection, objLogin);

    if (!response) {

        res.sendStatus(400);
        return;
    }

    res.status(200).json(response);
}

module.exports = login;