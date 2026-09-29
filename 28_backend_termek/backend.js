const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'varos2026'
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/varos', (req, res) => {
    const sql=`SELECT * from varos`
    pool.query(sql, (err, result) => {
        if (err){
          console.log(err)
          return res.status(500).json({error:"Hiba"})
        }
        console.log(result)
        return res.status(200).json(result)
    })
})

//select megye.mnev,COUNT(megye.mnev) from varos inner join megye on varos.megyeid=megye.id GROUP by megye.mnev;

//megyénként hány város
app.get('/megyeDarab', (req, res) => {
    const sql=`
            select megye.mnev,COUNT(megye.mnev) 
            from varos 
            inner join megye 
            on varos.megyeid=megye.id 
            GROUP by megye.mnev;`
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
