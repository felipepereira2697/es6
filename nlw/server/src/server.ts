import express from 'express';


const app = express();
app.get('/users',(request,response) => {
    response.json(['Cruyff', 'Pelé', 'Michael Jordan', 'Tom Brady', 'Ronaldo', 'Cristiano Ronaldo']);
})

app.listen(3333);


