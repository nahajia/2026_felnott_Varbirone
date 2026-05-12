const tomb=[17,18,23,42,51,16]

//megszámlálás alg
let db=0
for (let i = 0; i < tomb.length; i++) {
    if (tomb[i]>=18)
        db++
}
console.log(tomb)
console.log(`Ennyi nagykorú van: ${db}`)

//max kiv
let legnagyobb=0
for (const elem of tomb) {
    if (elem>legnagyobb)
        legnagyobb=elem
}
console.log(`A legidősebb: ${legnagyobb}`)

//összegzés
let osszeg=0
for (const elem of tomb) {
    osszeg+=elem
}
console.log(`Átlagéletkor: ${osszeg/tomb.length}`)
//eldöntés alg
let voltNyugger=false
for (const elem of tomb){
    if (elem>=65){
        voltNyugger=true
        break
    }
};
if (voltNyugger)
    console.log("Volt nyugdíjas")
else
    console.log("Nem volt nyugdíjas")

//kiválogatás alg
let kiskoruTomb=[]
tomb.forEach(elem => {
    if (elem<18)
        kiskoruTomb.push(elem)
});
console.log(`Kiskorúak: ${kiskoruTomb}`)


