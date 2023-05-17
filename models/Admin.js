module.exports = (sequelize, type) => {
    return sequelize.define('admin', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: type.STRING,
        lastName:  type.STRING,
        age: type.STRING,
        email:  type.STRING,
        phoneNumber: type.STRING,
        zipCode: type.STRING,
        serialNumber: type.STRING
    }, {timestamps: false});
};