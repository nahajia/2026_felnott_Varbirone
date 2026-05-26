function rendel(event){
    event.preventDefault()
    let beNev=document.getElementById("beNev").value 
    let lenyilo=document.getElementById("lenyilo").value 
    let beDatum=document.getElementById("beDatum").value 
    let beSzemelySzam=document.getElementById("beSzemelySzam").value 
    

    document.getElementById("kimenet").innerHTML=`
    <div>A megrenedelő neve: ${beNev}</div>
    <div>A kiválasztott film: ${lenyilo}</div>
    <div>A kiválasztott dátum: ${beDatum}</div>
    <div>Személyek száma:: ${beSzemelySzam}</div>
    
    `    
    let pop=document.getElementById("bePopcorn").checked     ?    1000    :  0 
    let udit=document.getElementById("beUdito").checked     ?    500    :  0 
    let na=document.getElementById("beNachos").checked     ?    1200    :  0 
   



    if (document.getElementById("ketD").checked){
        document.getElementById("kimenet").innerHTML+=`
        <div>
            Fizetendő: ${(3150+pop+udit+na)*beSzemelySzam}
        </div>
        `
    }
    else if (document.getElementById("negyD").checked){
        document.getElementById("kimenet").innerHTML+=`
        <div>
            Fizetendő: ${(5050+pop+udit+na)*beSzemelySzam}
        </div>
        `
    }

}


function poenKeszit(){
    document.getElementById("feliratEnergia").innerHTML="Egészségtelen az energiaital, igyál VIZET!!"
    setTimeout(()=>{
        document.getElementById("feliratEnergia").innerHTML="Energiaital"
        document.getElementById("beEnergia").checked=false

    },1000)
}