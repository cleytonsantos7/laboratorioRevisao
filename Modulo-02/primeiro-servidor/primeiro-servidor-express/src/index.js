const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Ola, esse é meu primeiro servidor');
});

app.listen(3000);