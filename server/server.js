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

//create route to POST/update new contacts
app.post('/contacts', async (req, res) => {
    const {first_name, last_name, phone, email, notes} = req.body;

    try {
        const result = await pool.query('INSERT INTO "contact list" (first_name, last_name, phone, email, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [first_name, last_name, phone, email, notes]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error adding contact: ', err);
        res.sendStatus(500)
    }})

//need to create route to display fave contacts

app.listen(port, () => {
    console.log(`Server started on ${port}`);
} )