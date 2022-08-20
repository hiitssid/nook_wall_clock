const currentWeather = {
    apiUrl: "https://weatherdbi.herokuapp.com/data/weather/",
    location: "Dhapakhel",
  };
  
  async function getData() {
    const response = await fetch(
      `${currentWeather.apiUrl}${currentWeather.location}`
    );
    const data = await response.json();
    address = [data.region];
    fullAdd = address.toString();
    town = fullAdd.split(",", 2);
    console.log(town[0]);
    console.log(temp);
    comment = data.currentConditions.comment;
    
    //   dayHour = data.currentConditions.dayhour;
    temp = data.currentConditions.temp.c;
    precip = data.currentConditions.precip;
    humidity = data.currentConditions.humidity;
    wind = data.currentConditions.wind.km;
    icon = data.currentConditions.iconURL;
    // console.log(dayHour, temp, percip, humidity, wind, icon, comment);
    console.log(temp);
  
 
    //   document.getElementById("dayhour").textContent = dayHour;
    // document.getElementById("comment").textContent = comment;
    document.getElementById("temp").textContent = temp;
    // document.getElementById("precip").textContent = precip;
    // document.getElementById("humidity").textContent = humidity;
    // document.getElementById("wind").textContent = wind;
    document.getElementById("icon").src = icon;
  }
  getData();
  setInterval(getData, 600000);