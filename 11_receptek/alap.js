//https://raw.githubusercontent.com/kodecocodes/recipes/refs/heads/master/Recipes.json
let adatok=[]

fetch("https://raw.githubusercontent.com/kodecocodes/recipes/refs/heads/master/Recipes.json")
.then(x => x.json())
.then(y => megjelenit(y));

function megjelenit(y){
    console.log(y)
    adatok=y
    //alert(JSON.stringify(y))
    let szoveg=`<select name="" id="lenyilo" onchange="valtozik()">`
    let sorszam=0
    for (const elem of y) {
        szoveg+=`<option value="${sorszam}" >${elem.name}</option>`
        sorszam++
    }

    szoveg+=`</select>`
    document.getElementById("lenyiloHelye").innerHTML=szoveg

}

function valtozik(){
    let kivalasztott=document.getElementById("lenyilo").value
    //alert(adatok[kivalasztott].imageURL)
    document.getElementById("kepHelye").innerHTML=`
    <img src="${adatok[kivalasztott].imageURL}" alt="" style="width:200px">
    `
    document.getElementById("ugrasHelye").innerHTML=`
    Ha részleteket akarsz a receptről kattints <a target="_blank" href="${adatok[kivalasztott].originalURL}"> ide </a>
    `


    let sz=`Hozzávalók: <ul>`
    adatok[kivalasztott].ingredients.forEach(element => {
        sz+=`<li>${element.quantity} ${element.name}</li>`
    });
    sz+="</ul>"
    document.getElementById("hozzavalokHelye").innerHTML=sz

    let sz2=`Elkészítés: <ul>`
    adatok[kivalasztott].steps.forEach(element => {
        sz2+=`<li>${element}</li>`
    });
    sz2+="</ul>"
    document.getElementById("elkeszitesHelye").innerHTML=sz2


}
