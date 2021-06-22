import 'reflect-metadata';
import express from 'express';

import './database' //Importando index.ts (padrão)

//Inicializando Express
const app = express();

//http://localhost:3000
app.listen(3000, () => console.log('Server is running'))