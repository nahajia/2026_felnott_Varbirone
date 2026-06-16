
for (let i = 0; i < hiresTomb.length; i++) {
    if (i%2==0){
        let div=document.createElement("div")
        document.getElementById("valtakozo").appendChild(div)
        let pic=document.createElement("img")
        div.appendChild(pic)
        pic.src=`kepek/${hiresTomb[i].kep}`
        let span=document.createElement("span")
        div.appendChild(span)
        span.innerHTML=hiresTomb[i].nev
        let b=document.createElement("b")
        div.appendChild(b)
        b.innerHTML=hiresTomb[i].ev

        pic.style.height="200px"
        div.style.margin="10px"
    }
    else{
        let div=document.createElement("div")
        document.getElementById("valtakozo").appendChild(div)
        
        let span=document.createElement("span")
        div.appendChild(span)
        span.innerHTML=hiresTomb[i].nev
        let b=document.createElement("b")
        div.appendChild(b)
        b.innerHTML=hiresTomb[i].ev


        let pic=document.createElement("img")
        div.appendChild(pic)
        pic.src=`kepek/${hiresTomb[i].kep}`
        pic.style.height="200px"
        div.style.margin="10px"
    }
    
}


