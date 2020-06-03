import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json([
    'Diego',
    'Matheus',
    'Eduardo',
    'Eleno',
    'Chaves'
  ]);
});

app.listen(3333);
