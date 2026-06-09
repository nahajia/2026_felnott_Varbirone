//-------------------------- 1.gomb--------------------
let gomb1=document.createElement("button")
document.body.appendChild(gomb1)
gomb1.innerHTML="Félkövér"
gomb1.addEventListener("click",felkoverAlakit)

function felkoverAlakit(){
    let filmek=document.getElementsByTagName("li")
    for (const element of filmek) {
        element.style.fontWeight="bold"
    }
}
//---------------------------------2.gomb
let gomb2=document.createElement("button")
document.body.appendChild(gomb2)
gomb2.innerHTML="Betűméret"
gomb2.addEventListener("click",betuMeretAlakit)

function betuMeretAlakit(){
    let filmek=document.getElementById("azonosito").children
    for (const element of filmek) {
        element.style.fontSize="20px"
    }
}
//---------------------------------3.gomb
let gomb3=document.createElement("button")
document.body.appendChild(gomb3)
gomb3.innerHTML="Narancs"
gomb3.addEventListener("click",narancsAlakit)

function narancsAlakit(){
    let filmek=document.getElementById("azonosito").children
    for (let index = 0; index < filmek.length; index++) {
        const element = filmek[index];
        element.style.width="50%"
        if (index%2==1)
            element.style.backgroundColor="orange"

       
    }
}
letoltes()
async function letoltes() {
  let x = await fetch("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON");
  let y = await x.json()
  kepernyoJelenit(y)
}

const kepernyoJelenit=(y)=>{
    console.log(y)
    let ul=document.createElement("ul")
    ul.id="azonosito"
    document.body.appendChild(ul)
    for (const element of y) {
        let lista=document.createElement("li")
        ul.appendChild(lista)
        lista.innerHTML=element.Title
    }
}


