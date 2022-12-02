const Server = require('./models/server')

require('dotenv').config(); //Cargar toda la importación

const server = new Server();

server.listen()