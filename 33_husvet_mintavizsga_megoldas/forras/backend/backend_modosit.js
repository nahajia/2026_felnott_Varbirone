const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const {body,param,validationResult} =require("express-validator")
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use("/kepek",express.static("kepek"))

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "husvet"
	})

function handleValidationErrors(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})


//-------------------------------------ÚJ végpontok----------------------------------
//stil hany
app.get('/stilusonkentHany', (req, res) => {
    const sql = `
        select stilusok.stilus_nev,COUNT(stilusok.stilus_nev)
        from locsoloversek
        INNER join stilusok
        on locsoloversek.stilus_id=stilusok.stilus_id
        GROUP by stilusok.stilus_nev;
        `

    pool.query(sql, (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: 'Hiba' })
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'Nincs adat' })
        }

        return res.status(200).json(result)
    })
})

//stilus torles
app.delete('/stilusTorles/:id', (req, res) => {
        const {id} =req.params
        const sql=`delete from stilusok where stilus_id=?`
        pool.query(sql,[id], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({error:"Hiba"})
        }
       
        return res.status(200).json({message:"Sikeres törlés"})
        })
})
//modosit
app.put('/stilusModosit/:id', (req, res) => {
        const {id} =req.params
        const {ujNev}=req.body
        const sql=`update stilusok
                    set stilus_nev=?
                    where stilus_id=?
                    `
        pool.query(sql,[ujNev,id], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({error:"Hiba"})
        }

        return res.status(200).json({message:"Sikeres módosítás"})
        })
})

//stilus felvitel
app.post('/felvitelStilus', [
        body('stilus_nev')
           
            .isLength({ min: 3 , max: 15}).withMessage('A stilus neve legalább 3 legfeljebb 15 karakter legyen')
    ], (req, res) => {

       if (handleValidationErrors(req, res)) return

        const {stilus_nev}=req.body
        const sql=`
                INSERT Into stilusok VALUES (Null,?)
                `
        pool.query(sql,[stilus_nev], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({error:"Hiba"})
        }

        return res.status(200).json({Message:"Sikeres!"})
        })
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


