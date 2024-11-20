import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Mestre Assassino da Florença.",
        imagem: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5qsP1Cndcqpe7nqn5AOeD6/ebecd02eded46f79054c14808f8a22f1/ezio_collection_ncsa-pagemeta-key-art.jpg",
    },
    { 
        id: 2,
        descricao: "A jornada de um hobbit para destruir um anel.",
        imagem: "https://upload.wikimedia.org/wikipedia/en/a/a0/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001_film_poster%29.jpg",
    },
    {
        id: 3,
        descricao: "Um futuro distópico onde a tecnologia controla tudo.",
        imagem: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3MTgtOWI4Ny00MTYxLTg3MDgtMzkxMjVkM2FjNTA3XkEyXkFqcG5pbWU2MDM0NTYy.jpg",
    },
    {
        id: 4,
        descricao: "Poder e Responsabilidade.",
        imagem: "https://upload.wikimedia.org/wikipedia/en/8/8a/Spider-Man_Homecoming_poster.jpg",
    },
    {
        id: 5,
        descricao: "Uma aventura épica em um mundo de fantasia.",
        imagem: "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_season_1_poster.jpg",
    },
    {
        id: 6,
        descricao: "Um detetive particular investiga um caso misterioso.",
        imagem: "https://m.media-amazon.com/images/M/MV5BMjAxOTM1MDQ4NV5BMl5BanBnXkFtZTcwMDk1MTQyMQ@@._V1_SX300.jpg",
    }
];
const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostID(id){
    return posts.findIndex((post) => {
          return post.id === Number(id)
    })
}


app.get("/posts/:id", (req, res) => {
    const index = buscarPostID(req.params.id)
    res.status(200).json(posts[index]);
});