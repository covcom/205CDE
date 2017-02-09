function celebrityName (firstName) {
	
	var nameIntro = "This celebrity is ";
	
  function lastName (theLastName) {
    return nameIntro + firstName + " " + theLastName;
	}
	
  //return lastName;
  
  return function(theLastName) {
  	return nameIntro + firstName + " " + theLastName;
  }
}

var mjName = celebrityName("Michael");

mjName ("Jackson");