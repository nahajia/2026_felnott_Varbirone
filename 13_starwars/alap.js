async function letoltes() {
    let x = await fetch("https://raw.githubusercontent.com/WildCodeSchool/starwars-api/refs/heads/master/db.json");
    let y = await x.json();
    console.log(y)

    dobozMegjelenit(y)

}

letoltes()


const dobozMegjelenit=(adatok)=>{
    let sz=""
    for (const elem of adatok.characters) {
        sz+=`
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div>
                    <p>${elem.name}</p>
                    <p><img src="${elem.pic}" alt="" class="kisKep"></p>
                </div>
            </div>
        `
    }
    document.getElementById("keret").innerHTML=sz
}