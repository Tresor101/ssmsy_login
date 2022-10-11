var logtry = 0;
//Variable to count number of attempts. 
//Below function Executes on click of login button.
function authentication(){
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    while(logtry <= 3){
        if ( username === "admin@gmail.com" && password === "admin"){
            alert ("Login successfully");
            break;
        }
        else{
            // Decrementing by one.
            logtry++;
            //alert(logtry +"attempted made so far");            
            if( logtry == 3){
                document.getElementById("email").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("submit").disabled = true;
                alert(logtry +"attempted made so far");
                }
                break;
            }
        //alert(logtry +"attempted made so far");
        }
}