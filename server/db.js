import pg from 'pg'

// connect to database with your credentials
const pool = new pg.Pool({
    user: 'tpl1122_12',
    host: '/tmp',
    database: 'contacts',
    // password: 'your_password',
    port: 5432,
});

export default pool;