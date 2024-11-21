import conectarAoBanco from "../config/mongoDAO.js"

// Conecta ao banco de dados MongoDB usando a string de conexão fornecida
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts da coleção "posts"
export default async function getTodososPosts() {
    // Obtém o banco de dados "donadio-instabyte"
    const db = conexao.db("donadio-instabyte");
    // Obtém a coleção "posts"
    const colecao = db.collection("posts");
    // Busca todos os documentos da coleção e retorna como um array
    return colecao.find().toArray();
}
