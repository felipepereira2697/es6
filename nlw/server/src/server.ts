//só nao tem ./ os arquivos que vem do node modules
import express from 'express';
import routes from './routes';

const app = express();

//vamos adicionar um plugin para que o express entenda que vamos conversar em json com ele
app.use(express.json());
app.use(routes);


app.listen(3333);


