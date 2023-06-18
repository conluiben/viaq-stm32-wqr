module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'user',
        password: process.env.DB_PASS || 'pass',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.sqlite'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
