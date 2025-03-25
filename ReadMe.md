# Contact List 📞

Let's create some contacts! This app is designed to create a contact list and store your fave people ⭐️

## Table of Contents
- [Prerequisites](#what-youll-need)
- [Installation](#installation-instructions)
- [Demo](#demo)

## What You'll Need

Prior to running this project, here are the pre-reqs you'll need. Please make sure you've got these installed on your computer:

* **Node.js:** This runs the app. You'll want version 16 or later.
* **npm** Node Package Manager.
* **PostgreSQL:** This is where we keep all our contact data. Make sure it's up and running! I provide some mock data to get you started in my db.sql file.
* Keep in mind I use VS Code for my code editor and a Mac Computer

## INSTALLATION INSTRUCTIONS
To get the data from your db.sql file into your local PostgreSQL database, you'll need to follow these steps:

1. Make sure you have PostgreSQL installed on your local machine. Start the PostgreSQL server

2. Access PostgreSQL. Run the following command:

```bash
psql -U your_username -d your_database_name
```
3. Follow each step in the db.sql file and copy and paste into your command line to build your table

4. Update your credentials in the db.js file to properly link your database to the server.

## Demo