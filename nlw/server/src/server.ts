import express from 'express';


const users = ['Cruyff', 'Pelé', 'Michael Jordan', 'Tom Brady', 'Ronaldo', 'Cristiano Ronaldo'];
const app = express();

//vamos adicionar um plugin para que o express entenda que vamos conversar em json com ele
app.use(express.json());
//Rota: Endereco completo da requisicao
//Recurso: Entidade que estamos acessando do sistema


//A respeito de parametros
//Request Param: Parametros que vem na propria rota e identificam um recurso
//Query param: tbm vem na propria rota mas diferente do request param, o query param pode ser opcional muito usado para filtros, paginacao
//Request body:parametros para criacao/atualizacao de informacoes
app.get('/users',(request,response) => {
    //Quem determina o query param é quem ta chamando
    //como pode vir undefined por ser opcional, precisamos checar
    //O query param pode trazer mais de um valor pra search
    //mas como nao estamos preocupados com isso agora, vamos forcar via cast pra ele ser uma string
    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    return  response.json(filteredUsers);
})
//PAssando parametros
app.get('/users/:id', (request, response) => {
    //pegando o parametro pelo nome dele
    const id = Number(request.params.id);
    const user = users[id];

    return response.json(user);


})
app.post('/users',(request, response) => {

    const data = request.body;
    console.log(data);
    const user = {
        name: data.name,
        email: data.email
    }
    return response.json(user);
})
app.listen(3333);


