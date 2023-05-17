module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: type.STRING,
        last_name:  type.STRING,
        age: type.STRING,
        email:  type.STRING,
        phone_number: type.STRING

    }, {timestamps: false});
};