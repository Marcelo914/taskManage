module.exports = (sequelize, DataTypes) => {
    const Tasks = sequelize.define("Tasks", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM('pending', 'in_progress', 'completed'),
            allowNull: false,
            defaultValue: 'pending',
        },
        due_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    }, {
            tableName: 'Tasks',
        });


    return Tasks;
}
