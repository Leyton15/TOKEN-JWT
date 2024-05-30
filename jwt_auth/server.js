const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors'); // Importa el módulo cors
const app = express();
const port = 3000;
const crypto = require('crypto');

app.use(bodyParser.json());
app.use(cors()); // Habilita 'cors' para todas las rutas

const users = [{
        username: 'leyton',
        password: bcrypt.hashSync('leyton1506', 8)
    },
    {
        username: 'azarenka',
        password: bcrypt.hashSync('azarenka2302', 8)
    },
    {
        username: 'lenin',
        password: bcrypt.hashSync('lenin1708', 8)
    }
];

const secretKey = crypto.randomBytes(32).toString('hex');

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(404).send('Usuario no encontrado');
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
        return res.status(401).send({ auth: false, token: null });
    }

    const token = jwt.sign({ id: user.username }, secretKey, {
        expiresIn: 86400
    });

    res.status(200).send({ auth: true, token, username: user.username });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});