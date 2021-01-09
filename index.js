var weather = {},
    city, key, units,
    arrayRain = [],
    arraySnow = [],
    thunderStorm = {},
    fog = {},
    sun = {},
    densityMult;

function setup() {
    createCanvas(windowWidth, windowHeight);
    loadAPIInfos();
    loadWeather();
    var interval = setInterval(() => loadWeather(), 1000 * 60 * 5);
    densityMult = 35;
    fog = new Fog();
    sun = new Sun();
    thunderStorm = new ThunderStorm();
}

function draw() {
    clear();
    thunder();
    background(0, 0);
    if (weather.weather) {
        var weatherId = weather.weather[0].id;
        if (weatherId == 800) {
            sun.show(weather.weather[0].icon.slice(-1));
        } else if (weatherId >= 500 && weatherId <= 531 && weatherId != 511) {
            var rainDensity = (weatherId + 1) % 10;
            rain(rainDensity);
        } else if (weatherId == 511 || (weatherId >= 600 && weatherId <= 622)) {
            var snowDensity = (weatherId + 1) % 5;
            snow(snowDensity);
        } else if (weatherId >= 701 && weatherId <= 781) {
            fog.show();
        } else if (weatherId >= 200 && weatherId <= 232) {
            thunder(weatherId);
        }
    }
}

function rain(density) {
    if (arrayRain.length < density * densityMult) {
        arrayRain.push(new Rain());
    }
    for (let i in arrayRain) {
        var rain = arrayRain[i];
        rain.move();
        rain.show();
        if (i > density * densityMult) {
            delete arrayRain[i];
        }
    }
    arrayRain = arrayRain.filter(el => el != undefined);
}

function snow(density) {
    if (arraySnow.length < density * densityMult) {
        arraySnow.push(new Snow());
    }
    for (let i in arraySnow) {
        var snow = arraySnow[i]
        snow.move();
        snow.show();
        if (i > density * densityMult) {
            delete arraySnow[i];
        }
    }
    arraySnow = arraySnow.filter(el => el != undefined);
}

function thunder(weatherId) {
    var thunderDensity = (weatherId + 1) % 10;
    var isRainning = Math.floor(weatherId / 10);
    if (isRainning == 20 || isRainning == 23) {
        rain(thunderDensity);
    }
    thunderStorm.setDensity(thunderDensity);
    thunderStorm.show();
}

function loadWeather() {
    if (key) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`)
            .then((response) => response.json())
            .then((json) => weather = json);
    }
}