const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
  res.send('Welcome to the Book Store');  
})

app.get('/api/books', (req, res) => {
    res.send('Welcome to the Book Section');  
  })


app.listen(3010,() => {
    console.log('Listening on Port 3010');
})