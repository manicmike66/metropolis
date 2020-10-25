/* Validation functions for the form */
	function valEmail(x){
            var theEmail=document.getElementById(x).value;
	    var regexE = /^\S+@\S+$/;
	    //alert('email entered is ' + theEmail + ' regex is ' + regexE);
		if (! regexE.test(theEmail)) {
		    alert('Please enter a valid email address');
		    document.getElementById(x).value='';
		}
		return 1;
	}

	function valPhone(x){
		let theValue = document.getElementById(x).value;
	    var regex = /^\+?(?:[0-9] ?){8,14}[0-9]$/;
		if (regex.test(theValue)) {
		return ;
		}
		alert('You must enter a valid phone number');
		document.getElementById(x).value='';
	}
	function valEnquiry(x){
            var theEnquiry=document.getElementById(x).value;
            if theEnquiry.length > 511{
                alert("Message too long! Please try again");
                return false;
            }
            else{
                return true;
            }
	}

