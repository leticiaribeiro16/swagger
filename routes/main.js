const express = require('express')
const router = express.Router()

router.get('/', (_, res) => {
  res.send('Hello, World!') // rota teste
});

router.post('/login', (req, res) => {
  try {
    const {email, password} = req.body; //login

    if (!(email && password)) {
      res.status(400).send('Missing parameters. You must send email and password.'); // erro de usuário
    } else {
      res.status(200).send('Its okay'); //servidor rodando 
    }
  } catch(error) {
    res.status(500).send('Internal server error'); // erro do servidor
  }
});

router.get('/data', (_, res) => {
  res.json({title: 'Data', content: 'Something'});
});

module.exports = router;