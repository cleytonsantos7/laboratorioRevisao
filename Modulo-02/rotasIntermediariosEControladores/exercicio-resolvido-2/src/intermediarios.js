const informouASenha = (req, res, next) => {
    const {senha} = req.query
    const senhaCarros = 'carros123'
  
    if(!senha){
        return res.send('Senha não informada');
    }

     if(senha !== senhaCarros){
        return res.send('Senha inválida');
    }

    next();
}

module.exports = informouASenha