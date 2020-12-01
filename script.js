// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
            div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[5].name}</li>
               <li>Diameter: ${json[5].diameter}</li>
               <li>Star: ${json[5].star}</li>
               <li>Distance from the Earth: ${json[5].distance}</li>
               <li>Number of Moons: ${json[5].moons}</li>
            </ul>
            <img src="${json[5].image}"></img>
         `;
      });
   });

   let form = document.querySelector("form");
   
   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let pilotNameInput = event.target.pilotName.value;
      let copilotNameInput = event.target.copilotName.value;
      let fuelLevelInput = event.target.fuelLevel.value;
      let cargoMassInput = event.target.cargoMass.value;

      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput} is ready for Launch`;
      document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotNameInput} is ready for Launch`;
         
      if(pilotNameInput === "" || copilotNameInput === "" ||
         fuelLevelInput === "" || cargoMassInput === "") {
         alert("All fields are required!");

         } else if (isNaN(pilotNameInput) === false || isNaN(copilotNameInput) === false ||
             isNaN(fuelLevelInput) || isNaN(cargoMassInput)) {
            alert("Make sure to enter valid information for each field!");
             } else {
     
          if (fuelLevelInput < 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("fuelStatus").innerHTML = "Not enough fuel for journey.";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
            document.getElementById("launchStatus").style.color = "red";
         } else if (cargoMassInput > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("cargoStatus").innerHTML = "There is too much mass for Shuttle to take off.";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
            document.getElementById("launchStatus").style.color = "red";
         } else {
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
            document.getElementById("launchStatus").style.color = "green";
       };
      };
   });      
});