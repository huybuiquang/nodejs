var express = require('express');
const app = new express();
const port = process.env.port || 8000

app.get('/', (req, res) => { res.end('Hello world') })

const server = require('http').createServer(app)
server.listen(port, () => {
  console.log('Express server listening on port ' + server.address().port)
})