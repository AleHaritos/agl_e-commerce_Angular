URL em produção: https://aglcompany.herokuapp.com/

# agl_e-commerce_Angular
E-commerce feito com Angular e NodeJS

How to install in localhost 
-FRONTEND OBSERVAÇÃO no app-component configurar firebase com o seu projeto firebase com autenticacao e storage 
No terminal dentro da pasta E-commerce 
-> cd frontend -> npm i -> npm start

-DATABASE
OBSERVAÇÃO no knexfile colocar as configs do seu postgres usuario e senha 
-> install postgres -> entrar terminal -> psql -U postgres -> sua senha -> create databse agl;

-BACKEND -> 
No terminal dentro da pasta E-commerce cd backend 
-> npm i -> knex migrate:latest

-POSTMAN
Criar primeiro usuário ADMIN POST
-> URLBACKEND + /usuario body: "nome": "adm", "email": "qualqueremail@gmail.com", "senha": "1234567", ""senha2": "1234567", "admin": true
