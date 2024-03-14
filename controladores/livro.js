const fs = require("fs");
const { getTodosLivros, getLivroByID, insereLivro, modificaLivro, apagarLivro } = require("../servicos/livro");

function getLivros (req, res) {
    try {
        const livros = getTodosLivros();
        res.send(livros);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }

  }

  function getLivro (req, res) {
    try {
        const id = req.params.id
        const livrosid = getLivroByID(id);
        res.send(livrosid);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }

  }

  function postLivro(req, res) {
    try{
          const livroNovo = req.body
          insereLivro(livroNovo);
          res.status(201);
          res.send("Livro inserido com sucesso");     
    }catch(error){
      res.status(500);
      res.send(error.message);
    }
  }

  function patchLivro(req, res){

    try{

      const id = req.params.id
      const body = req.body
      modificaLivro(body, id)
      res.send("Livro atualizado")

    }catch(error){
      res.status(500);
      res.send(error.message);
    }

  }

  function deleteLivro(req, res){

    try{

      const id = req.params.id
      apagarLivro(id)
      res.send("Livro Apagado")

    }catch(error){
      res.status(500);
      res.send(error.message);
    }

  }

  module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
  }