import {getTodososPosts, criarPost} from "../models/postsModels.js";
import fs from "fs";

export async function listarPosts(req, res)  {
    // Chama a função para obter todos os posts
    const posts = await getTodososPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON
    res.status(200).json(posts);
} 
    
export async function postarNovoPost(req, res) {
    // Pegamos o corpo da requisição, ou seja, o conteúdo que queremos criar
    const novoPost = req.body;
    try {
        // ''Tente criar esse novo post e coloque no banco de dados lá em models.''
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado)

    } catch (erro) {
      
        console.error(erro.messsage);
        res.status(500).json({"Ocorreu um erro inesperado":"Falha na requisição"})   
    }
    
   
    
} 
export async function uploadImagem(req, res) {
    // Cria um novo objeto de post com os dados básicos,
    // incluindo o nome original do arquivo da imagem.
    const novoPost = {
      descricao: "", // Descrição do post (pode ser preenchida posteriormente)
      imgUrl: req.file.originalname, // Nome original do arquivo da imagem
      alt: "", // Texto alternativo para a imagem (acessível por usuários com deficiência visual)
    };
  
    try {
      // Chama a função para criar um novo post no banco de dados
      const postCriado = await criarPost(novoPost);
  
      // Constrói o novo nome do arquivo da imagem, usando o ID do post inserido
      const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
  
      // Renomeia o arquivo da imagem para o novo nome, movendo-o para o diretório 'uploads'
      fs.renameSync(req.file.path, imagemAtualizada);
  
      // Retorna uma resposta HTTP 200 com o objeto do post criado,
      // indicando que a operação foi bem-sucedida
      res.status(200).json(postCriado);
    } catch (erro) {
      // Captura qualquer erro que possa ocorrer durante a operação
      console.error(erro.message); // Loga o erro no console para depuração
  
      // Retorna uma resposta HTTP 500 com uma mensagem de erro genérica,
      // indicando que ocorreu um problema no servidor
      res.status(500).json({ "Erro": "Falha na requisição" });
    }
  }