const Tasks = require('./Tasks');
const Categories = require('./Categories');
module.exports = (sequelize, DataTypes) => {

    const TasksCategories = sequelize.define("TasksCategories", {
        task_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'Tasks',
                key: 'id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'Categories',
                key: 'id'
            }
        },
    }, {
        tableName: 'TasksCategories'
    });

    return TasksCategories;
}
