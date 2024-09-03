const express = require('express');
const router = express.Router();
const { TasksCategories } = require('../models');

router.get("/", async(req, res)=> {
    const listOfTasksCategories = await TasksCategories.findAll();
    res.json(listOfTasksCategories);
});

router.post("/", async (req,res)=>{
    const taskCategory = req.body;
    await TasksCategories.create(taskCategory);
    res.json(taskCategory);
})

module.exports = router;
