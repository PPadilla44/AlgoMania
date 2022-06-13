function minUmbrellas(weather) {
    let count = 0;
    let prevRain = false;
    for (const day of weather) {
        if (day === "rainy" || day === "thunderstorms") {
            if (!prevRain) {
                count++;
                prevRain = true;
            }
        } else {
            prevRain = false
        }
    }
    console.log(count);
    return count;
}

// minUmbrellas(["cloudy"]); //0
// minUmbrellas(["rainy", "rainy", "rainy", "rainy"]); //1
// minUmbrellas(["overcast", "rainy", "clear", "thunderstorms"]) //2
minUmbrellas(["sunny","rainy","sunny","thunderstorms","clear","sunny","rainy","clear","clear","thunderstorms"]) //2


// wrong answer for weather = sunny,rainy,sunny,thunderstorms,clear,sunny,rainy,clear,clear,thunderstorms - Expected: 2, instead got: 4

// wrong answer for weather = sunny,sunny,sunny,thunderstorms,clear,windy,sunny,cloudy,thunderstorms,cloudy - Expected: 1, instead got: 2