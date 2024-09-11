const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.json({ message: "Servidor esta Rodando!" });
}) 

  app.get("/api", (req, res) => {
    res.json({ message: "Bem vindo ao Servidor!" });
  });

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})