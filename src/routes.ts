import express, { request } from 'express';
import path from 'path';
import knex from '../src/database/connection'
import html from 'http'
const routes = express.Router();

routes.get('/', (request, response) =>{
    return response.sendFile('C:/Users/anacs/Desktop/sitegio/server/public/index.html');
});


routes.post('/cadastro-servico', async (request, response) => {
    const {
        nome_dono,
        endereco,
        whatsapp,
        descricao
    } = request.body;

    const items = await knex('servicos').insert({
        nome_dono,
        endereco,
        whatsapp,
        descricao,
        status: 0
    })

    console.log(request.body);
    return response.sendFile('C:/Users/anacs/Desktop/sitegio/server/public/confirm_cadastro.html');
});


routes.get('/owner/lista-servicos', async (request, response) => {
    const servicos_disp = await knex('servicos').select('*');
    return response.json(servicos_disp);
});

export default routes;