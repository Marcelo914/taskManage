const express = require('express');
const router = express.Router();
const { Categories } = require('../models');

router.get("/", async (req, res) => {
    try {
        const listOfCategories = await Categories.findAll();
        res.json(listOfCategories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const category = req.body;
        const newCategory = await Categories.create(category);
        res.json(newCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Categories.findByPk(id);
        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const updatedCategory = req.body;

    try {
        const [affectedRows] = await Categories.update(updatedCategory, {
            where: { id: id }
        });
        if (affectedRows > 0) {
            const category = await Categories.findByPk(id);
            res.json(category);
        } else {
            res.status(404).json({ error: "Category not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })

    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedRows = await Categories.destroy({
            where: { id: id }
        }); if (deletedRows > 0) {
            res.json({ message: "Category has destroied" })
        } else {
            res.status(404).json({ error: "Category not found" })
        }
    }catch(error){
        res.status(500).json({ error: error.message })
    }
})


module.exports = router;
