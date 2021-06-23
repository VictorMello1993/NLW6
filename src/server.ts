import 'reflect-metadata';
import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors'

import './database' //Importando index.ts (padrão)
import {router} from './routes' //Importando as rotas (endpoints) da aplicação


//Inicializando Express
const app = express();

//Trabalhando com requisições com JSON
app.use(express.json()) 

//Inicializando as rotas (endpoints)
app.use(router)

//Middleware de erro
app.use((err: Error, req: Request, res: Response, next) => {
  if(err instanceof Error){
    return res.status(400).json({error: err.message}) //ERRO 400 => BAD REQUEST => DADOS INVÁLIDOS 
  }

  return res.status(500).json({status: "error", message: 'Internal Server Error'})
})

//http://localhost:3000
app.listen(3000, () => console.log('Server is running'))

/*OBS:Middlewares são elementos intermediários entre a requisição e resposta de uma API, sendo responsável tanto 
por interceptar por completo a requisição ou adicionar novas informações de resposta daquela requisição, entre
outras verificações. Por padrão, uma função middleware contém a função next(), que navega de uma rota para outra
vizinha (ou de uma camada para a próxima camada)*/