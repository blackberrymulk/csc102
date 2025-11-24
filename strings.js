document.getElementById("securityForm").onsubmit = function(event){
    // Stop the form from reloading the page automatically
    event.preventDefault();

    // Clear any previous messages from the page
    document.getElementById("message").innerHTML = "";
    document.getElementById("secret").innerHTML = "";

     // inputs
    let first = document.getElementById("firstName").value;
    let last = document.getElementById("lastName").value;
    let zip = document.getElementById("zip").value;

    // Combining the first and last name 
    let fullName = first + " " + last;

     // Making the full name length
    if (fullName.length > 20) {
        document.getElementById("message").innerHTML = "Your full name must be 20 characters or less.";
        return;
    }
     // Validate zip code: must be exactly 5 digits
    if (zip.length !== 5 || isNaN(zip)) {
        document.getElementById("message").innerHTML = "Zip code must be exactly 5 digits.";
        return;
    }
    // How the secret message is showed 
    document.getElementById("secret").innerHTML = "Access Granted: The secret message is... You are awesome,keep being you!";
}

