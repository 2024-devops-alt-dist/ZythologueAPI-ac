import {Pool}  from 'pg';

const pool = new Pool({
    user: 'senga',
    host: 'localhost',
    database: 'db2',
    password: 'megapassword',
    port: 5432,
});

export default pool;