import express from 'express'
import cors from 'cors'
const app = express();

var address = require('address');

app.use(express.static('public'))

app.use(cors({
  origin: ['http://localhost:8080'],  //指定接收的地址
  methods: ['GET', 'POST'],  //指定接收的请求类型
}))

app.get('/api/getname', (req, res) => {
  res.send({
    name: '黎明',
    age: 18
  })
})

app.listen(3000, () => {
  console.log('connect localhost: 3000, or')
  console.log(`${address.ip()}:3000`)
})