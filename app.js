let input = document.querySelector('#cityname')
let main = document.querySelector("#main")

input.onkeypress = function (e) {
    if (e.keyCode === 13) {
        main.innerHTML = "";
        const City = input.value
        fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + City + "&appid=422d9b549f260cc325650e2f823633fc")

        .then(data => {
            return data.json()
        })

        .then(parsedData => {

            main.innerHTML += `<li class = 'location'><b>${parsedData.name}, ${parsedData.sys.country}</b></li>`
            main.innerHTML += `<li class = 'temp'>${(parsedData.main.temp - 273.15).toFixed(1) + '&#8451;'}</li>`
            main.innerHTML += `<li>${(parsedData.main.temp_max - 273.15).toFixed(1) + '&#8451'} / ${(parsedData.main.temp_min - 273.15).toFixed(1) + '&#8451'}</li>`
            main.innerHTML += `<li>${parsedData.weather[0].main}</li>`

            
        })
        .catch(err => {
            console.log("Error")
            console.log(err)
        })

        input.value = ""
    }
    
}


