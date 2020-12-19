var city, key, units, weather = {}, icons = {}, iconHeight, iconWidth;


function setup() {
  createCanvas(windowWidth, windowHeight);
  city = "Rouen",
  key = "54c035e222a07a83da21472e4d9c0641",
  units = "metric";
  loadWeather();
  var interval = setInterval(() => loadWeather(), 1000 * 60 * 5);

}

function preload() {
  icons = {
    "01d": loadImage('./assets/01d@4x.png'),
    "01n": loadImage('./assets/01n@4x.png'),
    "02d": loadImage('./assets/02d@4x.png'),
    "02n": loadImage('./assets/02n@4x.png'),
    "03d": loadImage('./assets/03d@4x.png'),
    "03n": loadImage('./assets/03n@4x.png'),
    "04d": loadImage('./assets/04d@4x.png'),
    "04n": loadImage('./assets/04n@4x.png'),
    "09d": loadImage('./assets/09d@4x.png'),
    "09n": loadImage('./assets/09n@4x.png'),
    "10d": loadImage('./assets/10d@4x.png'),
    "10n": loadImage('./assets/10n@4x.png'),
    "13d": loadImage('./assets/13d@4x.png'),
    "13n": loadImage('./assets/13n@4x.png'),
    "50d": loadImage('./assets/50d@4x.png'),
    "50n": loadImage('./assets/50n@4x.png')
  }
}

function draw() {
  background(0,0);
  if(weather.weather) {
    icon = weather.weather[0].icon;
    iconHeight = icons[icon].height / 2;
    iconWidth = icons[icon].width / 2;
    image(icons[icon], width - iconWidth, 0, icons[icon].width / 2, iconHeight);
    textSize(20)
    fill(255)
    stroke(0);
    strokeWeight(5);
    text(`Temp : ${weather.main.temp}°C`, width - iconWidth - 40, iconHeight + 20);
  }
}

function loadWeather() {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`)
  .then((response) => response.json())
  .then((json) => weather = json);
}