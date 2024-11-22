import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsControllers.js";

// **Configuração do armazenamento de arquivos usando o multer**
// **Especificamente para Windows, garante que os arquivos sejam salvos com o nome original.**
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define o diretório onde os arquivos serão salvos
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Salva o arquivo com o nome original
  }
});

const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
  // **Inicializa o middleware para parsear requisições JSON**
  app.use(express.json());

  // **Rota para listar todos os posts**
  app.get("/posts", listarPosts);

  // **Rota para criar um novo post**
  app.post("/posts", postarNovoPost);

  // **Rota para fazer upload de uma imagem**
  // **O parâmetro 'imagem' corresponde ao nome do campo no formulário**
  app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;