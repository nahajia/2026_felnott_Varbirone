function adatKezeles(event){
    event.preventDefault()
    document.getElementById("kimenet").innerHTML=`
        <p>A neved: ${document.getElementById("nev").value}</p>
         <p>Kedvenc sportod: ${document.getElementById("sport").value}</p>
    `
    if (document.getElementById("kerteszkedes").checked)
        document.getElementById("kimenet").innerHTML+="Szabadidős tevékenység: kertészkedés <br>"
    if (document.getElementById("sorozatnezes").checked)
        document.getElementById("kimenet").innerHTML+="Szabadidős tevékenység: sorozatnézés"
}