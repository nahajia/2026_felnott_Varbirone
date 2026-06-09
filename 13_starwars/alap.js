let globalTomb=[]
async function letoltes() {
    let x = await fetch("https://raw.githubusercontent.com/WildCodeSchool/starwars-api/refs/heads/master/db.json");
    let y = await x.json();
    console.log(y)
    globalTomb=y.characters
    dobozMegjelenit(y)

}

letoltes()


const dobozMegjelenit=(adatok)=>{
    let sz=""
    let sorszam=0
    for (const elem of adatok.characters) {
        sz+=`
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="border border-primary arnyek" data-bs-toggle="modal" data-bs-target="#myModal" onclick="kattintas(${sorszam})">
                    <p>${elem.name}</p>
                    <p><img src="${elem.pic}" alt="" class="kisKep"></p>
                </div>
            </div>
        `
        sorszam++
    }
    document.getElementById("keret").innerHTML=sz
}


const kattintas=(hanyadik)=>{
    console.log(hanyadik)
    console.log(globalTomb[hanyadik].name)
    document.getElementById("modalisFej").innerHTML=globalTomb[hanyadik].name
    document.getElementById("modalisTorzs").innerHTML=`
    A bolygó, ahonnan származik: ${globalTomb[hanyadik].homeworld} 
    <img class="img-fluid" src="${globalTomb[hanyadik].pic}" alt="">
    `

    
}