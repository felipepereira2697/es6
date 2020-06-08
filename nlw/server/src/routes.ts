import express from 'express';
//upload
import multer from 'multer';
import multerConfig from './config/multer';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
//Rota: Endereco completo da requisicao
//Recurso: Entidade que estamos acessando do sistema

//Agora automaticamente, desacoplamos as rotas do arquivo principal
const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();
//A respeito de parametros
//Request Param: Parametros que vem na propria rota e identificam um recurso
//Query param: tbm vem na propria rota mas diferente do request param, o query param pode ser opcional muito usado para filtros, paginacao
//Request body:parametros para criacao/atualizacao de informacoes
routes.get('/items',itemsController.index);



routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

//passando mais um parametro pra informar que vamos fazer upload de um arquivo
routes.post('/points',upload.single('image') ,pointsController.create);


export default routes;
