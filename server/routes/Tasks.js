const express = require("express");
const app = express();
const router = express.Router()
const { Tasks } = require("../models")

app.use(express.json());

router.get('/', (req, res) => {
    res.json("hello world");
});
router.post('/', async (req, res) => {
    const task = req.body;
    await Tasks.create(task);
    res.json(task);

});


module.exports = router;
