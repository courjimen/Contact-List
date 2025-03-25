import express from 'express';
import cors from 'cors';
import pool from './db.js'

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());

//display contacts in database
app.get('/contacts', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM "contact list"');
        res.json(result.rows);
    } catch (err) {
        console.err('Error grabbing contacts: ', err);
        res.sendStatus(500)
    }
});

app.listen(port, () => {
    console.log(`Server stated on ${port}`);
} )