import 'reflect-metadata';
import express from 'express';

import './database' //Importando index.ts (padrão)
import {router} from './routes' //Importando as rotas (endpoints) da aplicação


//Inicializando Express
const app = express();

//Trabalhando com requisições com JSON
app.use(express.json()) 

//Inicializando as rotas (endpoints)
app.use(router)

//http://localhost:3000
app.listen(3000, () => console.log('Server is running'))