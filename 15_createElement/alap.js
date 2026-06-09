let h1=document.createElement("h1")
document.body.appendChild(h1)
h1.innerHTML="Html elemek létrehozása Javascripttel"
h1.style.textAlign="center"
h1.style.color="blue"

let h2=document.createElement("h2")
document.body.appendChild(h2)
h2.innerHTML="Gyakorlás"
h2.style.color="green"

let ul=document.createElement("ul")
document.body.appendChild(ul)
let li1=document.createElement("li")
ul.appendChild(li1)
li1.innerHTML="csípős csirkeszárny"
let li2=document.createElement("li")
ul.appendChild(li2)
li2.innerHTML="lasagna"
let li3=document.createElement("li")
ul.appendChild(li3)
li3.innerHTML="bolognai"
//li1.setAttribute("class","narancs")
li1.className="narancs"
li2.className="narancs"
li3.classList.add("narancs")

let img=document.createElement("img")
document.body.appendChild(img)
img.src="01.jpg"
img.style.width="200px"
img.style.border="2px solid blue"
img.addEventListener("click",function(){
    alert("Kicsit éhes vagyok!!!")
})

//img.addEventListener("click",kattintas)
// function kattintas(){
//     alert("Kicsit éhes vagyok!!!")
// }



let br=document.createElement("br")
document.body.appendChild(br)


let ugrik=document.createElement("a")
document.body.appendChild(ugrik)
ugrik.href="https://www.google.com/search?client=firefox-b-d&hs=jFi&sca_esv=bcc915fd4b92abab&udm=2&fbs=ADc_l-akmJ9clyHhwEynr9YRwEo_tYQUWp-_aNxOcHgKpLE-YUy1rF_kA3bn_mrSgXcgNhmuJ_hrB0X8wVkjBN1zt9F_hie2pcFxluQfXPCxcgtVVj6C6AZh52E_q88g5XA1rjxyJHGewbrRTkG_9DVGqrZ76QzBDftGK1OrOptaYJEb9d8opdrh7ce3gkj6jDFrjubkNz_R&q=lasagna&sa=X&ved=2ahUKEwjhkvDTx_qUAxU05AIHHWXpFaYQtKgLegQIHxAB&biw=1920&bih=929&dpr=1"
ugrik.innerHTML="Ugrás lasagnák képére"
ugrik.target="_blank"