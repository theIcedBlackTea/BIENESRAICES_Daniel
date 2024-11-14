const formularioLogin = (req, res) => {
    res.render('auth/login',{
        pagina: 'Iniciar Seción'
    })
}

const formularioRegistro = (req, res) =>{
    res.render('auth/registro', {
        pagina: 'Crear Cuenta'
    })
}

const formularioPasswordOlvidada = (req, res) =>{
    res.render('auth/olvide-password', {
        pagina: 'Recuperar Acceso a Bienes Raíces'
    })
}

export {
    formularioLogin,//Podemos poner múltiples funciones aquí, porque es export con llaves y no default (que me permite poner sólo una). 
    formularioRegistro,
    formularioPasswordOlvidada
}