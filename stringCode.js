function checkCreds() {
    //input validation for week 3
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of Login";
    //variables to store data we need.
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;

    //working on inputting first name
    firstName = document.getElementById("fName").value;
    console.log("The first name was inputted as " + firstName);
    //working on inputting last name
    lastName = document.getElementById("lName").value;
    console.log("The last name was inputted as " + lastName);
    //working on inputting zip code
    zipCode = document.getElementById("zipCode").value;
    console.log("The zipcode name was inputted as " + zipCode);
    // inputting the full name
    fullName = firstName + " " + lastName;
    console.log("The full name was inputted as " + fullName);
    // determining the length of full name
    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters.");
    // zip code has only five digits
    zipCodeNumb = parseInt(zipCode);
    console.log("The zipcode number is " + zipCodeNumb);
    // creates the loop that determins if you login.
    if (fullNameLength > 20) {
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
        // checks the zip code length
    } else if (zipCode.length != 5) {
        document.getElementById("loginStatus").innerHTML = "Invalid zip code";
        //alerts the user when they log in.
    } else {
        alert("User credientials passed, welcome to the site, " + fullName);
    }


}

function checkPalin() {
    console.log("checkPalin() started");
}