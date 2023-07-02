module.exports = (sequelize, Sequelize) => {
    const Sensor = sequelize.define('Sensor', {
        warning: {
            type: Sequelize.STRING,
            allowNull: false
        },
        parameter: {
            type: Sequelize.STRING,
            allowNull: false
        },
        value: {
            type: Sequelize.DECIMAL(6,2),
            allowNull: false
        }
    })

    /**
     * made changes accdg. to YT comments:
     * * declared variable const User and returned it in the end
     * the createdAt field is automatically made (as well as the updatedAt, which is also always updated!)
     * 
     * fields:
     * * warning: can be "threshold" to indicate high/low value, or 
     */

    return Sensor
}