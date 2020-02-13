require('dotenv').config();

const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    const songs = [
        { id: 1, name: "The Final Countdown", secret: process.env.SECRET },
        { id: 2, name: "Smells Like Teen Spirit" },
        { id: 3, name: "Imagine" },
        { id: 4, name: "One" },
        { id: 5, name: "Billie Jean" },
        { id: 6, name: "Bohemian Rhapsody" },
        { id: 7, name: "Hey Jude" },
        { id: 8, name: "Like A Rolling Stone" },
        { id: 9, name: "I Can't Get No Satisfaction" }
    ];

    res.status(200).json(songs);
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`\n*** Running on port ${port} \n`)
})