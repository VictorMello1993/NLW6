![1 - NLW #05 - 1920x1080](https://user-images.githubusercontent.com/35710766/123493131-f5a50780-d5f1-11eb-8411-9800a60efcde.png)

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/VictorMello1993/NLW6?color=FF0000">
  
  <a href="https://github.com/VictorMello1993/NLW6/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/VictorMello1993/NLW6?color=D3D3D3">
  </a> 
  
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/VictorMello1993/NLW6/stargazers"></a>
</p>


<p align="center">
  <a href="#earth_americas-visão-geral">Visão geral</a> •
  <a href="#wrench-recursos">Recursos</a> •
  <a href="#triangular_flag_on_postcomeçando">Começando</a> •
  <a href="#gearabrindo-a-api">Abrindo a API</a> •
  <a href="#oil_drumbanco-de-dados">Banco de dados</a> •
  <a href="#possíveis-melhorias">Possíveis melhorias</a>
</p>

---

<h2>:earth_americas: Visão geral</h2>
<p>Aplicação construída durante o evento NLW Together, promovido por <a href="https://rocketseat.com.br/">Rocketseat</a>. Esse projeto visa a demonstração da utilização de uma API da NLW Valoriza, com propósito de consolidar os conhecimentos de back-end do Node.js com Typescript. A aplicação consiste no gerenciamento de elogios de usuários, ou seja, um usuário logado no sistema poderá enviar mensagens de elogios uns aos outros. A única restrição é que somente usuários administradores que podem cadastrar as tags de cada elogio a ser feito por algum usuário.
<p>

---

<h2>:wrench: Recursos</h2>
<ul>
  <li><a href="https://www.npmjs.com/package/typescript">Typescript</a></li>
  <li><a href="https://nodejs.org/en/">NodeJS</a></li>
  <li><a href="https://www.npmjs.com/package/express">express</a></li>
  <li>SQLite</li>
  <li><a href="https://www.npmjs.com/package/typeorm">typeorm</a></li>
  <li><a href="https://www.npmjs.com/package/jsonwebtoken">jsonwebtoken</a></li>
  <li><a href="https://www.npmjs.com/package/class-transformer">class-transformer</a></li>
</ul>

---

<h2>:triangular_flag_on_post:Começando</h2>

1 - Clone o repositório
```
git clone https://github.com/VictorMello1993/NLW6.git
```


2 - Abra VS Code e abra a pasta <strong>NLW6</strong> como pasta raíz do projeto


3 - Abra o terminal e instale todas as dependências do projeto

#### NPM
```
npm install
```

Em seguida, abrir o servidor digitando o comando abaixo:
```
npm run dev
```

#### Yarn
Ou, se preferir, se tiver ```yarn``` instalado, executar o comando abaixo para instalar as dependências:
```
yarn
```

Em seguida, para abrir o servidor, digitar o comando abaixo: 
```
yarn dev
```

---

<h2>:gear:Abrindo a API</h2>
Para abrir todas as rotas da API, clique no botão abaixo e importe o workspace sugerido.

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=NLW06&uri=https%3A%2F%2Fgist.githubusercontent.com%2FVictorMello1993%2Fb0668525b15c324b6e0c432245b29e84%2Fraw%2F57bb6033c45d57516c32cb75ce346c88ddeec309%2Fnlw06.json)

Caso não tenha Insomnia instalado, baixe <a href="https://insomnia.rest/download">aqui</a>

---

<h2>:oil_drum:Banco de dados</h2>
Para visualizar todas as tabelas geradas pela aplicação, baixe o <a href="https://www.beekeeperstudio.io/">Beekeeper Studio</a>, software de gerenciamento de banco de dados. Neste projeto utilizamos SQLite, então para abrir a conexão com o banco de dados, basta procurar pelo arquivo <strong>database.sqlite</strong>. Teste para verificar se a conexão ocorrerá com êxito, e então, clique em <strong>Connect</strong>. 

![Screenshot_1](https://user-images.githubusercontent.com/35710766/123498891-0a40ca00-d609-11eb-8bcf-0f7d035c12fc.png)

Pronto, a conexão já está aberta, e poderá realizar as consultas.

---

## Possíveis melhorias
- [x] Implementar requisições de obter usuário e tag pelo id, e elogios dos usuários remetentes e dos usuários destinatários pelo id
- [ ] Implementar requisições de obter elogios por usuário remetente, destinatário e pelo id da tag
- [ ] Trocar SQLite por outro banco de dados à escolha (MySQL, SQLServer, MongoDB, etc)
- [ ] Verificar a possibilidade de implementar validações da API utilizando bibliotecas de terceiros
- [x] Criar uma classe personalizada para tratamento de exceções
- [ ] Incluir testes unitários e de integração com Jest

---
## Versões do README
<img src="https://user-images.githubusercontent.com/35710766/123499283-02365980-d60c-11eb-8731-9e9f42d300f0.png" alt="Bandeira do Brasil" width="22px"/> <a href="/README-ENUS.md">Inglês</a> | <img src="https://user-images.githubusercontent.com/35710766/123499278-ffd3ff80-d60b-11eb-85d5-156558ade93a.jpg" alt="Bandeira dos Estados Unidos" width="22px"/> <a href="/README.md">Português</a>
