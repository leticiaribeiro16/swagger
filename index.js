const express = require('express');
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const mainRoutes = require('./routes/main')
const swaggerFile = require('./swagger/swagger_output.json')
const app = express()

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false})) //IMPORTANTE -> serve para trabalhar com os dados vindo do seu cliente. Quando o cliente manda dados via form payload, esse pacote ele formata e transforma os dados para o formato de objeto javascript e joga tudo isso em um objeto dentro do objeto de requisição (req): req.body. Já o extended false é para evitar que utilizem campos encadeados

app.use('/', mainRoutes)

app.listen(3000, () => {
  console.log('server is listening on port 3000')
});

