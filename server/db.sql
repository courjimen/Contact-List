CREATE DATABASE contacts 
\c contacts

CREATE TABLE "contact list" (
    contact_id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT,
    email VARCHAR(100),
    phone VARCHAR(25) UNIQUE NOT NULL,
    notes TEXT
)

INSERT INTO "contact list" (first_name, last_name, email, phone, notes) VALUES 
('Mi', 'Madre 💕', 'momsemail@hotmail.com', '313-485-4495', 'Birthday: April 8'),
('Hub', 'Wub ♥️', 'hubby@gmail.com', '813-397-7791', 'Anniversary: May 7 ✨'),
('Tre', NULL, 'trevonsofly@aol.com', '248-254-2020', 'Birthday: Marzo 27')