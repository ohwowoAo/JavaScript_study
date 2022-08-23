const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()

app.use(cors())
app.use(express.json())

//GET
app.use('/api', express.Router().get('/', (req, res) => {
    console.log(req.params)
    const{apikey, s} = req.query
    if(apikey !== '1234'){
      res.status(401).json('인증이 실패했습니다.')
      return
    }
    res.status(200).json({
      result: s
    })
}))


//POST
app.use('/api', express.Router().post('/', (req, res) => {
  console.log(req.body)
  const {title, done} = req.body
  fs.writeFileSync('db.json', JSON.stringify([
    {}
  ])
}))




app.listen('1234', () => {
    console.log('서버가 1234포트로 실행됨')
})
//http://localhost:1234/api