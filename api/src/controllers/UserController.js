const User = require('../models/User');
const md5 = require('md5');

module.exports = {
    async store(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.create({
                email: email,
                password: md5(password)
            });
            
            // Adiciona um log para confirmar que o usuário foi criado
            console.log('Usuário criado com sucesso:', user);
            
            res.status(201).json({
                _id: user._id,
                email: user.email
            });
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            
            // Adiciona um log para exibir detalhes do erro
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
};
