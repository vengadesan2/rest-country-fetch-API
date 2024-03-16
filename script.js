
const res1= document.createElement("div")

const url  = "https://restcountries.com/v3.1/all"
const result =fetch(url)
result.then((data)=>data.json())
.then((ele)=>{
   for(let i=0; i<ele.length;i++){
    //  console.log(ele[i].name.common);
     res1.setAttribute("id","div1") 
      res1.innerHTML+=`<div class="row col-sm-6 md-4 lg-4 xl-4">
      <div class="card">
        <div class="card-header">${ele[i].name.common} </div>
        <img src="${ele[i].flags.png}" class="img-fluid img-thumbnail" alt="...">
          <div class="card-body">  
            <p class="card-title">capital:${ele[i].capital}</p>
            <p class="card-title">region:${ele[i].region}</p>
            <p class="card-title">subRegion:${ele[i].subregion} </p> 
            <p class="card-title">country code:${ele[i].cca3} </p> 
            <button class ="btn btn-danger" id="button" onclick="getcountrydata('${ele[i].name.common}')"> click the weather</button>
            </div>
      </div>`
        
        document.body.append(res1)
   }
})
function getcountrydata(countryname){
  var apiKey = "55dcac1a1601413f3f2d1a43d3792a1"
  var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryname}&appid=${apiKey}`;

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((weatherData) => {
      var weatherCountryName = weatherData.name;

      if (weatherCountryName === countryname) {
        alert(
          `Weather in ${weatherData.name}: ${weatherData.main.temp_min} min:deg&c && ${weatherData.main.temp_max} max:deg&c`
        );
      } else {
        alert("Country names do not match.");
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert`Error fetching weather data.`;
    });
}