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

1. Clone my project here: https://github.com/courjimen/Contact-List.git

Run these commands at the root level
```bash
npm install
npm install concurrently --save-dev
```

Run these commands in my server folder
```bash
npm install
npm install express cors pg
mpm install nodemon 
```

Run these commands in my client folder
```bash
npm install react react-dom react-icons
```

2. Grab the data from your db.sql file into your local PostgreSQL database, you'll need to follow these steps:

- Make sure you have PostgreSQL installed on your local machine. Start the PostgreSQL server

- Access PostgreSQL. Run the following command:

```bash
psql -U your_username -d your_database_name
```
-  Follow each step in the db.sql file and copy and paste into your command line to build your table

- Update your credentials in the db.js file to properly link your database to the server.

## Demo