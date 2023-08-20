const express = require('express');
const cors = require('cors'); // Cross-origin resource sharing library
const morgan = require('morgan'); // library for loggin
//config
require('dotenv').config(); // enable .env

class Server{
    constructor(){
        this.app = express();
        this.port  = process.env.PORT||3000; 
        
        this.runCors();
        this.middlewares();  
        this.routes();
    }
    runCors(){
        this.app.use(cors());
      }
    middlewares(){
        this.app.use(express.static('public'));
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    routes() {
        this.app.get('/', (req, res) => { res.json({ message: 'ok' }) });

        this.app.get('/example', require('./routes/example-routes'));
        //this.app.use(this.auth,require('../path'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("server running at port",this.port);
        })
    }
}

module.exports=Server;