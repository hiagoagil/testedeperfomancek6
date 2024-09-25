const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); // Ajuste o caminho conforme necessário

const app = express();
const port = process.env.PORT || 3333;

const uri = "mongodb+srv://hiagoqagil:200611@cluster0.vnkzy.mongodb.net/UserDB?retryWrites=true&w=majority";

// Configurando o middleware para JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usando as rotas
app.use(routes);

// Exemplo de rota simples
app.get('/', (req, res) => {
    res.send('API rodando!');
});

// Conectando ao MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado ao MongoDB');
        
        // Ouvindo na porta definida
        app.listen(port, () => {
            console.log(`Servidor rodando na porta ${port}`);
        });
    })
    .catch(err => {
        console.error('Erro ao conectar ao MongoDB:', err);
    });
