const express = require('express')
const app = express()
const port = 3001
/*
app.get('/', (req, res) => {
  res.send('Servidor Rodando')
}) */

  app.get("/", (req, res) => {
    res.json({ message: "Bem vindo ao Servidor!" });
  });

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})