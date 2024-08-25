const port = 3001;
const express = require('express');
const app = express();

const db = require('./models');


db.sequelize.sync().then(() => {
    app.listen(port, (req, res) => {
        console.log(`Server running on http://localhost:${port}`);
    });
})
