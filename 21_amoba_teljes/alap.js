let karakter="x"
let sorszam=0
let oszlopSzam=0
//sorok
let label1=document.createElement("label")
document.body.appendChild(label1)
label1.innerHTML="Sorok száma: "
let input1=document.createElement("input")
input1.type="range"
input1.id="sorSzam"
input1.min="5"
input1.max="10"
input1.addEventListener("change",tablazatLetrehoz)
document.body.appendChild(input1)
let br1=document.createElement("br")
document.body.appendChild(br1)
//oszlopok
let label2=document.createElement("label")
document.body.appendChild(label2)
label2.innerHTML="Oszlopok száma: "
let input2=document.createElement("input")
input2.type="range"
input2.id="oszlopSzam"
input2.min="5"
input2.max="10"
input2.addEventListener("change",tablazatLetrehoz)
document.body.appendChild(input2)
//gomb
let br2=document.createElement("br")
document.body.appendChild(br2)

// let gomb=document.createElement("button")
// document.body.appendChild(gomb)
// gomb.innerHTML="Táblázat létrehozása"
// gomb.addEventListener("click",tablazatLetrehoz)

let bekezdes1=document.createElement("p")
document.body.appendChild(bekezdes1)

let keret=document.createElement("div")
document.body.appendChild(keret)

tablazatLetrehoz()

function tablazatLetrehoz(){
    bekezdes1.innerHTML=`Sorok száma: ${input1.value} Oszlopk száma ${input2.value}`
    //Táblázat létrehozása
    keret.innerHTML=""
    let table=document.createElement("table")
    keret.appendChild(table)
    sorSzam=parseInt(input1.value)
    oszlopSzam=parseInt(input2.value)
    for (let i = 0; i <   sorSzam; i++) {
        let tr=document.createElement("tr")
        table.appendChild(tr)
        for (let j = 0; j < oszlopSzam; j++) {
            let td=document.createElement("td")
            tr.appendChild(td)
            td.innerHTML="&nbsp;&nbsp;"
            td.id=`${i}-${j}`
            td.sor=`${i}`
            td.oszlop=`${j}`
            td.addEventListener("click",()=>kattintas(td))         
        }

        
    }
}
function kattintas(elem){

    //alert(elem.oszlop)
    if (elem.innerHTML=="&nbsp;&nbsp;"){
        if (karakter=="x")
            karakter="o"
        else
            karakter="x"
        
        if (karakter=="x")
            elem.innerHTML=`<span style="color:blue">${karakter}</span>`
        else
            elem.innerHTML=`<span style="color:red">${karakter}</span>`

        if (ellenoriz() == true)
            setTimeout(() => {
                Swal.fire({
                    title: 'Vége',
                    text: `${karakter} nyert!`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    tablazatLetrehoz();
                });
            }, 10);
       
    }
}
//true, ha valaki nyert - 5db
function ellenoriz(){
    //alert("proba")
    for (let i = 0; i < sorSzam; i++) {
        for (let j = 0; j < oszlopSzam-4; j++) {
            //alert(`${i}-${j}`)
            //jobbra x
            let db=0
            for (let k = j; k < j+5; k++) {
                //i.sor, k.oszl
                //alert(document.getElementById(`${i}-${k}`).innerHTML)
                // if (i<sorszam && k<oszlopSzam)
                if (document.getElementById(`${i}-${k}`).innerHTML==`<span style="color:blue">${karakter}</span>`){
                    db++
                    //alert(db)
                }
            }
            if (db==5){
                    //alert(db)
                    return true
            }
            //jobbra o
            db=0
            for (let k = j; k < j+5; k++) {
                //i.sor, k.oszl
                //alert(document.getElementById(`${i}-${k}`).innerHTML)
                //if (i<sorszam && k<oszlopSzam)
                if (document.getElementById(`${i}-${k}`).innerHTML==`<span style="color:red">${karakter}</span>`){
                    db++
                    //alert(db)
                }
            }
            if (db==5){
                    //alert(db)
                    return true
            }
        }}
        for (let i = 0; i < sorSzam-4; i++) {
            for (let j = 0; j < oszlopSzam; j++) {

            //lefele x
            db=0
            for (let k = i; k < i+5; k++) {
                //i.sor, k.oszl
                //alert(document.getElementById(`${i}-${k}`).innerHTML)
                //if (k<sorszam && j<oszlopSzam)
                if (document.getElementById(`${k}-${j}`).innerHTML==`<span style="color:blue">${karakter}</span>`){
                    db++
                    //alert(db)
                }
            }
            if (db==5){
                    //alert(db)
                    return true
            }
            //lefele o
            db=0
            for (let k = i; k < i+5; k++) {
                //i.sor, k.oszl
                //alert(document.getElementById(`${i}-${k}`).innerHTML)
                //if (k<sorszam && jk<oszlopSzam)
                if (document.getElementById(`${k}-${j}`).innerHTML==`<span style="color:red">${karakter}</span>`){
                    db++
                    //alert(db)
                }
            }
            if (db==5){
                    //alert(db)
                    return true
            }
        }}
        for (let i = 0; i < sorSzam-4; i++) {
            for (let j = 0; j < oszlopSzam-4; j++) {
            //jobbra-le átló x
            db=0
            for (let k = 0; k < 5; k++) {
                //i.sor, k.oszl
                //alert(document.getElementById(`${i}-${k}`).innerHTML)
                //if (i+k<sorszam && j+k<oszlopSzam)
                if (document.getElementById(`${i+k}-${j+k}`).innerHTML==`<span style="color:blue">${karakter}</span>`){
                    db++
                    //alert(db)
                }
            }
            if (db==5){
                    //alert(db)
                    return true
            }
            //jobbra-le átló o
            db=0
            for (let k = 0; k < 5; k++) {
                //i.sor, k.oszl
                //alert(document.getElementById(`${i}-${k}`).innerHTML)
                //if (i+k<sorszam && j+k<oszlopSzam)
                if (document.getElementById(`${i+k}-${j+k}`).innerHTML==`<span style="color:red">${karakter}</span>`){
                    db++
                    //alert(db)
                }
            }
            if (db==5){
                    //alert(db)
                    return true
            }
        }}
         for (let i = 0; i < sorSzam-4; i++) {
            for (let j = 4; j < oszlopSzam; j++) {
            //balra-le átló x
            db=0
            for (let k = 0; k < 5; k++) {
                //i.sor, k.oszl
                //alert(document.getElementById(`${i}-${k}`).innerHTML)
                //if (i+k<sorszam && j+k<oszlopSzam)
                if (document.getElementById(`${i+k}-${j-k}`).innerHTML==`<span style="color:blue">${karakter}</span>`){
                    db++
                    //alert(db)
                }
            }
            if (db==5){
                    //alert(db)
                    return true
            }
            //balra-le átló o
            db=0
            for (let k = 0; k < 5; k++) {
                //i.sor, k.oszl
                //alert(document.getElementById(`${i}-${k}`).innerHTML)
                //if (i+k<sorszam && j+k<oszlopSzam)
                if (document.getElementById(`${i+k}-${j-k}`).innerHTML==`<span style="color:red">${karakter}</span>`){
                    db++
                    //alert(db)
                }
            }
            if (db==5){
                    //alert(db)
                    return true
            }
        }
    }
    return false
}