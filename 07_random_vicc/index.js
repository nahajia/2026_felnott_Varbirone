ujViccMegjelenit()

function ujViccMegjelenit(){
    let veletlen=Math.floor(Math.random() * viccTomb.length)
    //alert(veletlen)
    document.getElementById("viccSzoveg").innerHTML=viccTomb[veletlen].szoveg
    document.getElementById("kepHelye").innerHTML=`<img style="width:300px" src="kepek/${viccTomb[veletlen].kep}" alt="">`

}


