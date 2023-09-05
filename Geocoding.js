let data1 = null;
let data2 = null;
var lat1 = null;
var lon1 = null;
let request2 = new XMLHttpRequest();
let request1 = new XMLHttpRequest();

function displayCityData() {
    console.log("City Input Button Pressed");
    var city = document.querySelector("#city-box").value;
    document.querySelector("#weatherIntroMsg").innerHTML = "The weather in " + city + " is: ";
    

    request1.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=7c4b0ef5bcbfaf8cfc62e37ce16cb507", true);

    request1.onload = function() {
    data1 = JSON.parse(this.response); // json.parse converts the response into Js
    console.log(data1);
    
    if (request1.status == 200) {
        
        var icon =  "http://openweathermap.org/img/w/" + data1.weather[0].icon + ".png";
        var temp = data1.main.temp;
        var wind = data1.wind.speed;
        var description = data1.weather[0].description;

        lat1 = data1.coord.lat.toString();
        lon1 = data1.coord.lon.toString();
      
    
        //Update Title:
        document.querySelector("#cityHeader").innerHTML = city + " Information:";

        //Display Weather Data:
        $(".icon").attr("src", icon);
        document.querySelector("#weatherDescription").innerHTML = description;
        document.querySelector("#tempData").innerHTML = temp + " &#176F";
        document.querySelector("#windData").innerHTML = wind + " MPH";

        }else{
            document.querySelector("#errorMsg").innerHTML = "Please enter valid city!";
            console.log("An error occured.");
        }



};

request1.send();
}

//Display Longitude and Latitude:
function displayLon() {
    document.querySelector("#lonDesc").innerHTML = lon1 + "&#176";
}
function displayLat() {
    document.querySelector("#latDesc").innerHTML = lat1 + "&#176";
}

// // Open Up second API: Transit Data
// function displayTransitData(){

//     if ((lon1 != null) && (lat1 != null)) {
//         //Use Longitude and Latitude from other API to make query
//         request2.open("GET", "https://transit.land/api/v1/stops?lon=" + lon1 + "&lat=" + lat1 + "&r=100", true);
    
//         request2.onload = function() {
//         data2 = JSON.parse(this.response); // json.parse converts the response into Js
//         console.log(data2);
//         console.log(lon1);
//         console.log(lat1);
    
//         let number = 0;
//         if (request2.status == 200) {
//             data2.stops.forEach(stop => {
//                 number += 1;
//                 let stopOption = document.createElement("option");
//                 let stopOptionText = document.createTextNode(stop.name);
    
//                 stopOption.appendChild(stopOptionText);
//                 document.querySelector("#stopList").appendChild(stopOption);
//                 //console.log(stop.title + ": " + stop.description);
    
//             });
    
//             } else {
//             console.log("An error occured.");
//             }

//     }
//     request2.send();

//     }

// }


// function itemsSelected() {
//     let selectedIndex = document.querySelector("#stopList").selectedIndex;
//     document.querySelector("#stopDesc").innerHTML = `<p>${data2.stops[selectedIndex].name}</p>
//     <p>${data2.stops[selectedIndex].served_by_vehicle_types}</p>`;

// }

