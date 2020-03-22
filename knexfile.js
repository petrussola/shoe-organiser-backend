// Update with your config settings.
require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: process.env.DB_URL,
        migrations: {
            directory: './db/migrations',
        },
        seeds: {
            directory: './db/seeds/dev',
        },
        useNullAsDefault: true,
    },

    staging: {
        client: 'pg',
        connection: process.env.DB_URL,
        migrations: {
            directory: './db/migrations',
        },
        seeds: {
            directory: './db/seeds/dev',
        },
        useNullAsDefault: true,
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: './db/migrations',
        },
        seeds: {
            directory: './db/seeds/production',
        },
        useNullAsDefault: true,
    },
};
