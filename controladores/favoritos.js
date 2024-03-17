const fs = require("fs");
const {getTodosFavoritos, apagarLivroFavoritos, insereFavorito } = require("../servicos/favorito");

function  getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos();
        res.send(livros);
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }

  }

  function deleteFavorito(req, res){

    try{

      const id = req.params.id
      apagarLivroFavoritos(id)
      res.send("Livro favorito apagado")

    }catch(error){
      res.status(500);
      res.send(error.message);
    }

  }

  
  function postFavorito(req, res) {
    try{
          const id = req.params.id
          insereFavorito(id);
          res.status(201);
          res.send("Livro inserido com sucesso");     
    }catch(error){
      res.status(500);
      res.send(error.message);
    }
  }

  module.exports = {
    getFavoritos,
    deleteFavorito,
    postFavorito,
  }