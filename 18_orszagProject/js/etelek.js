let sz=""
for (const elem of kajakTomb) {
    sz+=`
        <div class="text-center m-3 p-3 border border-dark border-2">
            <p>${elem.etelNev}</p>
            <p><img src="kepek/${elem.etelKep}"></p>
            <p>${elem.etelKeszites}</p>            
        </div>
    `
}
document.getElementById("etelekBox").innerHTML=sz