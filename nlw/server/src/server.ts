import express from 'express';



const app = express();
//Rota: Endereco completo da requisicao
//Recurso: Entidade que estamos acessando do sistema
app.get('/users',(request,response) => {
    return  response.json(['Cruyff', 'Pelé', 'Michael Jordan', 'Tom Brady', 'Ronaldo', 'Cristiano Ronaldo']);
})

app.post('/users',(request, response) => {
    const user = {
        name: 'Pelé',
        email: 'thegoat@gmail.com'
    }
    return response.json(user);
})
app.listen(3333);


