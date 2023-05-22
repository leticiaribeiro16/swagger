const swaggerAutogen = require('swagger-autogen')(); 
const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./index.js']

swaggerAutogen(outputFile, endpointsFiles);

//instancia o módulo swagger-autogen num objeto, e utiizamos esse objeto passando dois parâmetros: o diretório e o arquivo JSON; e o segundo é um array com todos os arquivos que contêm as rotas que foram definidas



