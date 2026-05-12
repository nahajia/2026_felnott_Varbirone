let sz=""
for (const elem of viccTomb) {
    sz+=`
    <div class="egeszKeret" onclick="kattintas()">
    <p class="szovegecske">${elem.szoveg} </p>
     <img class="kicsinyit" src="kepek/${elem.kep}" alt="">
    </div>
    `
}
//alert(sz)
document.getElementById("keretRendszer").innerHTML=sz


function kattintas(){
    alert("hello")
}
