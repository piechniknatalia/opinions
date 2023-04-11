module.exports = (sequelize, DataTypes) => {

    const Opinions = sequelize.define("Opinions", {
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        opinionText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Opinions;
};