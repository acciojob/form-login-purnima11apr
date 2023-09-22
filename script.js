function getFormvalue() {
    //Write your code here
	 let form = document.getElementById("form1");

	 var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;

	  if (firstName && lastName) {

	  alert("First Name: " + firstName + "\nLast Name: " + lastName);
    } else {

	alert("Please fill in both First Name and Last Name fields.");
    }

	 return false;

}
