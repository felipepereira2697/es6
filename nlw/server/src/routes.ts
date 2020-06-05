import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
//Rota: Endereco completo da requisicao
//Recurso: Entidade que estamos acessando do sistema

//Agora automaticamente, desacoplamos as rotas do arquivo principal
const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();
//A respeito de parametros
//Request Param: Parametros que vem na propria rota e identificam um recurso
//Query param: tbm vem na propria rota mas diferente do request param, o query param pode ser opcional muito usado para filtros, paginacao
//Request body:parametros para criacao/atualizacao de informacoes
routes.get('/items',itemsController.index);

routes.post('/points', pointsController.create);

export default routes;
