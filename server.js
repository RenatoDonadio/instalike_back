import express from "express";
import routes from "./src/routes/postsRoutes.js";



const app = express();
routes(app);


// Inicia o servidor na porta 3000 e imprime uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando...");
});




//     function buscarPostID(id){
//     return posts.findIndex((post) => {
//           return post.id === Number(id)
//     })
// }


// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostID(req.params.id)
//     res.status(200).json(posts[index]);
// }); 