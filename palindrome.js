// Track whether the user wants to continue
var keepGoing = true;

// Get form element
var form = document.getElementById("palindromeForm");

form.onsubmit = function () {

    // If user chose to stop, do nothing
    if (!keepGoing) {
        return;
    }

    // Get user input
    var userInput = document.getElementById("userText").value;

    // Remove spaces and make lowercase
    var cleanedInput = userInput.replace(/\s+/g, "").toLowerCase();

    // Reverse the cleaned string
    var reversedInput = cleanedInput.split("").reverse().join("");

    // Get message div
    var messageDiv = document.getElementById("message");

     // Check if palindrome
    if (cleanedInput === reversedInput) {
        messageDiv.innerHTML = "<p class='success'> This IS a palindrome!</p>";
    } else {
        messageDiv.innerHTML = "<p class='error'> This is NOT a palindrome.</p>";
    }

    // Ask user if they want to continue
    var continueChoice = confirm("Do you want to enter another word?");

    // If user is done
    if (!continueChoice) {
        keepGoing = false;
        messageDiv.innerHTML += "<p>Thanks for using the Palindrome Checker!</p>";
    }

}
