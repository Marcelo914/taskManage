const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require("bcrypt");
const { sign } = require('jsonwebtoken');

router.post("/", async (req, res) => {
    const { username, password, email } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            email: email,
            username: username,
            password: hash,
        })
        res.json("SUCESS");
    });
});

router.post("/login", async (req, res) => {
    const { password, email } = req.body;

    const user = await Users.findOne({ where: { email: email } });

    if (!user) {
        return res.json({ error: "Email não registrado" });
    }

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
            return res.json({ error: "Senha incorreta" });
        }


        const accessToken = sign(
            {
                email: user.email,
                id: user.id
            },
            "importantsecret"
        );
        res.json(accessToken);
    });
});

module.exports = router;
