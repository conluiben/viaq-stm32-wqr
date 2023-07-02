module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'user',
        password: process.env.DB_PASS || 'pass',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.sqlite',
            port: process.env.PORT || 8081,
            useUTC: false
        },
        timezone: "+08:00"
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
