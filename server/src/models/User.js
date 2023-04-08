module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        password: Sequelize.STRING
    })

    /**
     * made changes accdg. to YT comments:
     * * declared variable const User and returned it in the end
     */

    return User
}