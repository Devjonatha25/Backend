


const express = require('express');
const app = express();
const router = require('./routes/routes');

app.use(express.urlencoded({extend:true}));

app.use(express.json());

app.use(router)




const PORT = 8080;

app.listen(PORT,() =>{
    console.log(`rodando na porta ${PORT}`);
})

