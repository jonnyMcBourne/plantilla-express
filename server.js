const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//config
require('dotenv').config();

class Server{
    constructor(){
        this.app = express();
        this.port  = process.env.PORT||3000; 
        
        this.runCors();
        this.middlewares();   
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
    routes(){
        //this.app.use(this.auth,require('../path'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("server running at port",this.port);
        })
    }
}

module.exports=Server;