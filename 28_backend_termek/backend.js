const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

const pool = mysql.createPool({
  host: '',
  user: '',
  password: '',
  database: ''
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tipus', (req, res) => {
    const sql=`SELECT * from tipus`
    pool.query(sql, (err, result) => {
        if (err){
          console.log(err)
          return res.status(500).json({error:"Hiba"})
        }
        console.log(result)
        return res.status(200).json(result)
    })
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
