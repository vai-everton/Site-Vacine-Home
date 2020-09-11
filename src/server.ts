import express from 'express';
import path from 'path';
import routes from './routes';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded( {extended: true}));

app.use(routes);
app.use(express.static("public"));

app.listen(3333, () => {
    console.log('Server ON!');
})