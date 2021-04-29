const porta = 3003;

const express = require('express');
const bancoDeDados = require('./bancoDeDados');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (req, res, next) => {
  const { id } = req.params;
  res.send(bancoDeDados.getProduto(id));
});

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto);
});

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto);
});

app.delete('/produtos/:id', (req, res, next) => {
  const produto = bancoDeDados.excluirProduto(req.params.id);
  res.send(produto);
});

app.listen(porta, () => {
  console.log(`Servidor rondando no link http://localhost:${porta}`);
});
