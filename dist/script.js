function myLineUp(event){
    //Prevents page refresh on submit event
    event.preventDefault();

    //Gets the value of the checked radio button using a pseudo CSS class (I had to google this.)
    //https://stackoverflow.com/questions/74843753/how-to-get-the-value-of-checked-radio-button
    //https://www.w3schools.com/cssref/sel_checked.php
    let statusElement = document.querySelector('input[name="status"]:checked');

    //Uses a truthy to determine if a radio button is checked, then assigns the checked value
    let status;
    if(statusElement){
        status = statusElement.value;
    } else {
        status = "None";
    }

    //Gets the value of the date dropdown
    let gameDate = document.getElementById("gameDate").value;

    //Same pseudo class to get which boxes are checked
    let checkedBoxes = document.querySelectorAll('input[name="players"]:checked');
    let playersArray = [];

    //Parses the NodeList into an array
    checkedBoxes.forEach(function(checkbox) {
        playersArray.push(checkbox.value);
    });

    //Concatenates the new array into a String
    let playersString;
    if(playersArray.length > 0){
        playersString = playersArray.join(", ");
    } else {
        playersString = "No players selected";
    }

    //Concatenates all values into a String to print to the site
    let finalString = "Status: " + status + " | Date: " + gameDate + " | Players: " + playersString;

    //Prints to site
    let dataPrinter = document.getElementById("dataPrinter");
    dataPrinter.textContent = finalString;

    //Prints to console
    console.log("Status: " + status);
    console.log("Date: " + gameDate);
    console.log("Players: " + playersString);
}

//Identifies the submit button
let submitButton = document.getElementById("subButton");

//EventListener for submit button clicks
submitButton.addEventListener("click",myLineUp);