
function adatKezeles(event){
    event.preventDefault()
    let lenyilo=document.getElementById("lenyilo").value 
    document.getElementById("kimenet").innerHTML=`A kiválasztott elem: ${lenyilo}`
}



