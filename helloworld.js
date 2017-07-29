//Cynthia & Kaisma Pair Code
var userInput = document.getElementById("user-input"),
    userClick = document.getElementById("user-click"),
    clearMessage = document.getElementById("clear-msg"),
    displayArea = document.getElementById("display-area");


    userClick.addEventListener("click", function() {
        displayArea.innerText += "Hello " + userInput.value + "\n"; 
        
    });

    clearMessage.addEventListener("click", function() {
        userInput.value = "";
        displayArea.innerText = "";
    });
