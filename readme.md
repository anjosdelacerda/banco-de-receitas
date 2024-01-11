#Documentação

Este projeto é uma Api Rest-full com objetivo de ajudar pessoas a encontrarem pratos culinários que podem ser feitos apenas com os itens que ela tem em casa no momento. A proposta é você utilizar uma lista de ingredientes que você tem disponível no momento e encontrar uma lista de receitas culinárias que tenham exatamente os mesmos ingredientes citados, com algumas limitações no número de ingredientes escolhidos.

##Requisitos

###Node.js

Esta aplicação utiliza o Node.js na versão 16. Para instalar o Node.js basta seguir o passo-a-passo da documentação do Node clicando [aqui](https://nodejs.org/en/download). Caso você seja um usuário Linux, você pode instalar o Node.js utilizando os comandos abaixo em seu terminal:

` curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - `

`sudo apt-get install -y nodejs`

Para verificar se o Node.js foi instalado corretamente você pode utilizar o comando abaixo para verificar a versão Node instalada.

`node --version`

###PostgreSQL 

O banco de dados utilizado nessa aplicação é o POstgreSQL e também é necessário instala-lo para que a aplicação funcione. As instruções de download estão em sua documentação [aqui](https://www.postgresql.org/download/).

Para utilizar o postgresql vocẽ terá que executar alguns passos:

- 1 Inicie o postgresql em seu terminal
  ´sudo -u postgres psql´

- 2 Criei o seu usuário no postgresql
  ´CREATE USER seu_usuario CREATEROLE CREATEDB PASSWORD '1234';´

Utilizar o Postgresql pelo terminal pode ser desconfortante, fazer o uso de uma IDE para leitura de banco de dados pode facilitar na hora de criar um database para a migração de nossas tabelas, como o Beekeeper, porém não é obrigatório.


