
let sz=""
for (const elem of termeszetTomb) {
    sz+=`
        <div class="col-sm-6">
            <div class="kartya">
                <p class="text-center cimecske">${elem.nev}</p>
                <p class="text-center"><img class="img-fluid kep" src="kepek/${elem.kep}" alt=""></p>
                <p class="leirasSzoveg">${elem.leiras}</p>                
            </div>
        </div>
    `
}
document.getElementById("foDiv").innerHTML=sz






