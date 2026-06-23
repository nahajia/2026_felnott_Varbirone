letoltes()
async function letoltes() {
    let szelesseg=document.getElementById("szelesseg").value 
    let hosszusag=document.getElementById("hosszusag").value 
    
    //terkep
    var data = [{
  type:'scattermap',
  lat:[`${szelesseg}`],
  lon:[`${hosszusag}`],
  mode:'markers',
  marker: {
    size:14
  },
  text:['']
}]

var layout = {
  autosize: true,
  hovermode:'closest',
  map: {
    bearing:0,
    center: {
      lat:szelesseg,
      lon:hosszusag
    },
    pitch:0,
    zoom:5
  },
}

Plotly.newPlot('terkep', data, layout)

    //idojaras letöltése
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