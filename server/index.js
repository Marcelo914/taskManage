const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const { Users, Tasks, Categories, TasksCategories } = require('./models');

app.use(express.json());
app.use(cors());

const db = require('./models/');

const taskRouter = require('./routes/Tasks');
app.use("/tasks", taskRouter);

const usersRouter = require('./routes/Users');
app.use("/auth", usersRouter);

const categoriesRouter = require('./routes/Categories');
app.use("/categories", categoriesRouter);

const tasksCategoriesRouter = require('./routes/TasksCategories');
app.use("/taskscategories", tasksCategoriesRouter);

Users.hasMany(Categories, { foreignKey: 'user_id', as: 'categories' });
Categories.belongsTo(Users, { foreignKey: 'user_id', as: 'user' });

Tasks.belongsToMany(Categories, { through: TasksCategories, foreignKey: 'task_id', as: 'categories' });
Categories.belongsToMany(Tasks, { through: TasksCategories, foreignKey: 'category_id', as: 'tasks' });

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});
