function checkForm()
{    
    if(document.a.c.value == "Legion")
    {
     alert("Well Done! Now onto the final round.")
     document.location.href="thefinale.html";   
    }
    else 
    {
        alert("Try again :P");
        document.location.href="crack.html";
    }
}
