var attempt = 4;
function checkForm() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
 
	if(username=="" || password==""){
		alert ("Please complete the required fields!");
    }
    else{
        if (username == "fatboi" && password == "1234567896987654321")
        {
            alert ("Login successfully. CONGRATS ON COMPLETING THE FINAL LEVEL. I REALLY HOPE YOU HAD FUN. ONCE DONE, DON'T FORGET TO CALL MY NAME(VARUN BTW).");
            document.location.href="Main.html";
        }
        else{
			attempt --;
			alert("Invalid username or password \r\nYou have "+attempt+" attempts left. Make it count ;)");
 
            if(attempt == 0)
            {
				document.getElementById("username").disabled=true;
				document.getElementById("password").disabled=true;
			}
		}
	}
}