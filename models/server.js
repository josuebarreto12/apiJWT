const express = require('express')
const cors = require('cors')
const {dbConnection} = require("../database/config")

class Server{

  constructor(){

    this.app = express()

    this.port = process.env.port

    this.usuariosPath = '/api/usuarios'  
    this.rolesPath = '/api/roles'  
    this.clientesPath = '/api/clientes'  
    this.authPath = '/api/auth'

    this.middlewares()

    this.routes()
    this.dbConectar()
  }
  async dbConectar() { 
    await dbConnection()
  }
  middlewares(){//Otras funcionalidades
    this.app.use( cors() )

    this.app.use( express.static('public'))

    //Permite peticiones json a la API
    this.app.use( express.json() );
  }

  routes(){//Rutas de la aplicación
    this.app.use( this.usuariosPath, require('../routes/usuarios'));
    this.app.use( this.clientesPath, require('../routes/clientes'));
    this.app.use( this.rolesPath, require('../routes/roles'));
    this.app.use( this.authPath, require('../routes/auth'));
  }
  
  listen(){
    this.app.listen(this.port, () => {
      console.log(`Escuchando por el puerto ${this.port}`)
    }) 
  }
}

module.exports = Server