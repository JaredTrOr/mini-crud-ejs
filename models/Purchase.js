module.exports = (sequelize, type) => {
    return sequelize.define('purchase', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date_purchase: type.STRING,
    }, {timestamps: false});
};