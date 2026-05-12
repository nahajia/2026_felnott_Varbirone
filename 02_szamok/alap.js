let szoveg=""
for (let i = 0; i < 10; i++) {
    szoveg+="<p>Hello</p>"
}
document.getElementById("keret").innerHTML=szoveg

let szoveg2=""
for (let i = 10; i <= 98; i++) {
    if (i%2==0)
        szoveg2+=`<span class="kek">${i} </span>`
    else
        szoveg2+=`<span class="piros">${i} </span>`

    
}
document.getElementById("angyal").innerHTML=szoveg2

