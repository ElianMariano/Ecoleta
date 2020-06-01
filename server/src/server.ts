import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log("Listagem de usuários");

    res.json(['Elian', 'Mariano', 'Gabriel']);
});

app.listen(3333);