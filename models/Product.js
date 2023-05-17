module.exports = (sequelize, type) => {
    return sequelize.define('product', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: type.STRING,
        type: type.STRING,
        size: type.STRING
    }, {timestamps: false});
};