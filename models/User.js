module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: type.STRING,
        lastName:  type.STRING,
        age: type.STRING,
        email:  type.STRING,
        phoneNumber: type.STRING

    }, {timestamps: false});
};