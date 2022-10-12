var logtry = 0;
//Variable to count number of attempts. 
//Below function Executes on click of login button.
function authentication(){
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
        if ( username === "admin@gmail.com" && password === "admin"){
            alert ("Login successfully");
        }
        else{           
            if( logtry === 3){
                document.getElementById("email").disabled = true;
                document.getElementById("password").disabled = true;
                document.getElementById("submit").disabled = true;
                alert(logtry +"attempted made so far");
                }
                //Incrementing by one. 
                logtry++; 
                alert(logtry +"attempted made so far");
            }
}