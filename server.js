const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/amanda', (req,res) => {res.send("Hello Amanda")});

app.listen(port, ()=>console.log("Listening"));