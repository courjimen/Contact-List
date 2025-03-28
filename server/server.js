import express from 'express';
import cors from 'cors';
import pool from './db.js';

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
        console.error('Error grabbing contacts: ', err);
        res.sendStatus(500)
    }
});

//create route to POST/update new contacts
app.post('/contacts', async (req, res) => {
    const {first_name, last_name, phone, email, notes} = req.body;

    try {
        const result = await pool.query('INSERT INTO "contact list" (first_name, last_name, phone, email, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [first_name, last_name, phone, email, notes]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error adding contact: ', err);
        res.sendStatus(500)
    }})

//create delete route
app.delete('/contacts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteContact = await pool.query('DELETE FROM "contact list" WHERE contact_id = $1', [id]);
       
        if (deleteContact.rowCount > 0) {
            res.status(200).json({message: 'Contact removed'});
        } else {
            res.status(404).json({message: "Contact not found"})
        }
    } catch(err) {
        console.error('Error deleting contact:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
})
app.listen(port, () => {
    console.log(`Server started on ${port}`);
} )