const express = require('express');
const app = express();
const port = 3001;

const db = require('./models');

const taskRouter = require('./routes/Tasks');
app.use("/tasks", taskRouter);


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});
