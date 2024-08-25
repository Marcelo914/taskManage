const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(express.json());
app.use(cors());

const db = require('./models/');

const postRouter = require('./routes/Posts')
app.use("/posts", postRouter);
const commentsRouter = require('./routes/Comments')
app.use("/comments", commentsRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
})
