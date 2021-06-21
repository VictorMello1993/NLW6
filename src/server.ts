import express from 'express';

//Inicializando Express
const app = express();

app.get('/test', (req, res) => {
  return res.send('Olá mundo - Requisição GET')
})

app.post('/test-post', (req, res) => {
  return res.send('Olá mundo - Requisição POST')
})

//http://localhost:3000
app.listen(3000, () => console.log('Server is running'))