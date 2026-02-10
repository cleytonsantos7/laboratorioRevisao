const informouASenha = (req, res, next) => {
    const {senha} = req.query
    const senhaAlunos = 'cubos123'
  
    if(!senha){
        return res.status(401).json({ mensagem: 'Senha não informada.'});
    }

     if(senha !== senhaAlunos){
        return res.status(401).json({ mensagem: 'Senha inválida.'});
    }

    next();
};

module.exports = informouASenha