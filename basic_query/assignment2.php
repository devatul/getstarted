<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
</head>
<body>
<form id="#form" class="sub" method="post" action="" >
    <div style="float: left;">Email:
        <input type="text" value="" id="email" name="email" />
    </div>
    	<br/>
    	<br/>
    <div style="float: left;">Password:
        <input type="password" value="" id="Password" name="Password" />
    </div>
	<br/>
	<br/>
    <div style="float: left;">Confirm password:
        <input type="password" value="" id="cmfPass" name="cmfpass" />
    </div>
	<br/>
    	<br/>
Accept terms & conditions:
    <input type="checkbox" value="true" id="terms" name="terms"  />
    	<br/>
    	<br/>
    	<br/>
    <input type="submit" name="submit" value="Submit" />
</form>

<script>
// Email validation function

function valid_email()
{
 var mail=$("#email").val().trim(); //get the value of email input field
  if(mail==""){ 		// checks if field is not empty
   alert("Email Required");	// Error message shown if field is empty
  }else{
   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;	//Email pattern
   if(!re.test(mail)){ //Checks the email pattern is correct
     alert("Please enter a valid email id");	// Error if pattern do not match and return false if it match, return true
     return false;	
   }else{
     return true;	
   }
}
}


//password validation
function password(){
  var pass=$("#Password").val().trim();	// Get the value of password field
  var cmfpass=$("#cmfPass").val().trim();	//Get the value of confirm password field
  	if(pass!==cmfpass){				// Checks if password and confirm password match
	alert("Please enter the correct password");
	  return false;
	}else if(pass==""){
	  alert("Please enter the correct password");
	  return false;
	}else if(cmfpass==""){
	  alert("Please enter the correct password");
	  return false;
  	}else{
    	  return true;
  	}
}

// Checkbox validation function
function check(){
  if($('#terms').is(':checked')){ //Ckecks if checkbox is checked
	return true;			// Return true if checked
  }else{
	alert("Please accept the T & C");
	return false;			// Return false if not checked and error msg shown
  }
}

// form validation initiated here
$(document).on('submit','form.sub',function(e){
	if(!valid_email() || !password() || !check()){
	  e.preventDefault();
	}else{
	  alert("Validation success");
	}
});


	
</script>
</body>
</html>
