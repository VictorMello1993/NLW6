/*Sobrescrevendo o index.d.ts presente na própria biblioteca de tipagens do Express para adicionar a propriedade user_id, 
onde no arquivo original não existe*/
declare namespace Express{
  export interface Request {
    user_id: string;
  }
}

//OBS: não esquecer de habilitar a propriedade "typeRoots": "caminhoDasTipagens" no tsconfig.json
//Ex: "typeRoots": ["./src/@types"]
