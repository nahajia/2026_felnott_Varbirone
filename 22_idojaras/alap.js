letoltes()
async function letoltes() {
    let szelesseg=document.getElementById("szelesseg").value 
    let hosszusag=document.getElementById("hosszusag").value 
    
    let x = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${szelesseg}&longitude=${hosszusag}&hourly=temperature_2m`);
    let y = await x.json();
    megjelenit(y);
}


const megjelenit=(adatok)=>{

    console.log(adatok)
    var data = [
            {
                x: adatok.hourly.time,
                y: adatok.hourly.temperature_2m,
                type: 'bar'
            }
            ];

            Plotly.newPlot('myDiv', data);

}