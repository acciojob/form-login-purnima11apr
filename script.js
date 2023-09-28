function getFormvalue() {
    //Write your code here
	 let form = document.getElementById("form1");

	 var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;


	  alert( firstName + lastName);
    

	

}
