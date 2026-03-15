const apiKey = "26c9f7ceff1ca09dac294f3bf14579f0";
const cityinput = document.getElementById("cityinput");
     const cityname = document.getElementById("cityname");
     const temperature = document.getElementById("temperature"); 
     cityinput.addEventListener("keypress", function(event) {
      if(event.key === "Enter") {
            event.preventDefault(); 
            weatherapp();
      }
      });


async function weatherapp(){
     


      if (!cityinput.value) {            
            alert("Please enter a city name!");
            return;
      }
      try { 
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityinput.value}&appid=${apiKey}&units=metric`);
      
      if(response.ok){
            const data = await response.json();
            cityname.textContent = data.name;
            temperature.textContent = `${data.main.temp}°C`;
            const description = document.getElementById("description");
                  let emoj9i = "";
            if(data.weather[0].description=="clear sky"){
                  emoj9i = "☀️";
                  description.textContent = data.weather[0].description + " " + emoj9i;

            }
            else if(data.weather[0].description=="few clouds"){
                  emoj9i = "🌤️";
                  description.textContent = data.weather[0].description + " " + emoj9i;
            }
                  else if(data.weather[0].description=="scattered clouds"){
                        emoj9i = "☁️";
                        description.textContent = data.weather[0].description + " " + emoj9i;
                  }
                  else if(data.weather[0].description=="broken clouds"){
                        emoj9i = "☁️";
                        description.textContent = data.weather[0].description + " " + emoj9i;
                  }
                  else if(data.weather[0].description=="shower rain"){
                        emoj9i = "🌧️";
                        description.textContent = data.weather[0].description + " " + emoj9i;
                  }
                  else if(data.weather[0].description=="rain"){
                        emoj9i = "🌧️";
                        description.textContent = data.weather[0].description + " " + emoj9i;
                  }
                  else if(data.weather[0].description=="thunderstorm"){
                        emoj9i = "⛈️";
                        description.textContent = data.weather[0].description + " " + emoj9i;
                  }
                  else if(data.weather[0].description=="snow"){
                        emoj9i = "❄️";

                        description.textContent = data.weather[0].description + " " + emoj9i;
                  }
                        else if(data.weather[0].description=="mist"){
                              emoj9i = "🌫️"
                              description.textContent = data.weather[0].description + " " + emoj9i
                              }
                              
                                    
;

           cityinput.value = "";

      }
            else{
                  throw new Error("City not found! Please check the name and try again.");
            }

      }
      catch(error){
            console.error(error);
            alert("Error fetching weather data: " + error.message);
      }     }