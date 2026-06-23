let label=document.createElement("label")
document.body.appendChild(label)
label.innerHTML="Sorok, oszlopok száma:"

let input=document.createElement("input")
document.body.appendChild(input)
input.type="range"
input.min="10"
input.max="20"
input.value='10'
input.addEventListener("change",rajzol)
input.id="csuszka"

let div=document.createElement("div")
document.body.appendChild(div)

let meret=10

rajzol()
function rajzol(){
    //alert("hello")
    div.innerHTML=""
    meret=document.getElementById("csuszka").value
    //alert(meret)
    let table=document.createElement("table")
    div.appendChild(table)
    for (let i = 0; i < meret; i++) {
        let tr=document.createElement("tr")
        table.appendChild(tr)
        for (let j = 0; j < meret; j++) {
            let td=document.createElement("td")
            tr.appendChild(td)
            td.innerHTML=""
            td.id=`${i}-${j}`
            td.addEventListener("click",()=>kattintas(td))
        }
        
    }
}

let kiJon=0
function kattintas(td){
    //alert(td.id)
    if (kiJon==0)
        if (td.innerHTML==""){
            td.innerHTML="X"
            td.style.color="brown"
            kiJon=1
        }
    if (kiJon==1)
        if (td.innerHTML==""){
            td.innerHTML="O"
            kiJon=0
            td.style.color="red"
        }
     
    
   
}


