const express = require('express');
const bodyParser = require('body-parser')
const product = require('./controllers/product')

const app = express();
const port = process.env.PORT || 8080

app.disable('x-powered-by')
app.use(bodyParser.json({ limit: '100kb'}))
app.use(express.static('dist'));
app.get('/api/products', product.getList)
app.listen(port, () => console.log('Listening on port 8080!'));