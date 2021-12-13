// Write your helper functions here!
 require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
   // Here is the HTML formatting for our mission target div.
   let missionTargetDiv = document.getElementById("missionTarget");
   missionTargetDiv.innerHTML = 
   
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl} ">
                `
   
}


        // Adding Validation
        // 1 Adding Alerts
      // 2 Valid information for the fields 

function validateInput(testInput) {
       let numberInput = Number(testInput);
       if(testInput === ""){
         return "Empty";
       }else if(isNaN(numberInput) ) { 
          return   "Not a Number";
        } else if(isNaN(numberInput)===false ) { 
             return "Is a Number";
         } 

    }
       
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
       let pilotStatus = document.getElementById("pilotStatus");
       let copilotStatus = document.getElementById("copilotStatus")
       let fuel = document.getElementById("fuelStatus")
       let cargo = document.getElementById("cargoStatus")
        


       if (validateInput(pilot)==="Empty" || validateInput(copilot)==="Empty" || validateInput(fuelLevel)==="Empty"|| validateInput(cargoLevel)==="Empty" ){
           alert("All fields are requared!");

       } else if (validateInput(pilot)==="Is a Number" || validateInput(copilot)==="Is a Number" || validateInput(fuelLevel)==="Not a Number"|| validateInput(cargoLevel)==="Not a Number"  ){
           alert("Make sure to enter valid information for each field!");

       }else {
        let launchStatus = document.getElementById("launchStatus"); 
           list.style.visibility = "visible";
           pilotStatus.innerHTML = `Pilot ${pilot} is ready  for launch`;
           copilotStatus.innerHTML = `Copilot ${copilot} is ready  for launch`;
            if( fuelLevel <10000  ){
                fuel.innerHTML = `Fuel level too low for launch`
                launchStatus.innerHTML =` Shuttle not ready for launch`
                launchStatus.style = "color:red;"
            }else if (cargoLevel>10000){
                cargo.innerHTML = `Cargo mass too big for launch`
                launchStatus.innerHTML =` Shuttle not ready for launch`
                launchStatus.style = "color:red;"
            }
          
       }
    
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            if (response.status >= 400) {
                throw new Error ("Bad response");
            }
            else {
                return response.json();
            }
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    // passing in array of planets
    
    let chosenNumber = Math.floor(Math.random()*planets.length);
    let chosenPlanet = planets[chosenNumber];
    return chosenPlanet;
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
