module.exports = (sequelize, type) => {
    return sequelize.define('purchase', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        datePurchase: type.STRING,
    }, {timestamps: false});
};