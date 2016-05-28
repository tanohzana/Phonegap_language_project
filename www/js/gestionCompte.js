
$('#formInscription').submit(function(){
    var postData = $(this).serialize();
    var proceed=true;
    var ids1 = ["prenom","nom","email","bday","pseudo","pass"];
    var ids2 = ["pseudoDejaEx","bdayNotCorrect","emailFormat"];

    for(var i=0; i<ids2.length; i++)
        document.getElementById(ids2[i]).style.display="none";

    for(var i=0; i<ids1.length; i++)
        document.getElementById(ids1[i]).style.borderColor="#ccc";

    for(var i=0; i<ids1.length; i++)
        if(!document.getElementById(ids1[i]).value){
            document.getElementById(ids1[i]).style.borderColor="red";
            proceed=false;
        }

    if(proceed){
        $.ajax({
            type: 'POST',
            data: postData,
            url: 'http://192.168.1.15/newUser.php',
            complete: function(data){
                //console.log(data);
                if(data.responseText==document.getElementById("pseudo").value){
                    window.sessionStorage.setItem("pseudo", data.responseText);
                    window.location.href="accueil.html";
                }
                else if(data.responseText=="pseudo"){
                    document.getElementById("pseudo").style.borderColor="red";
                    document.getElementById("pseudoDejaEx").style.display="block";
                }
                else if(data.responseText=="bday"){
                    document.getElementById("bday").style.borderColor="red";
                    document.getElementById("bdayNotCorrect").style.display="block";
                }
                else if(data.responseText=="email"){
                    document.getElementById("email").style.borderColor="red";
                    document.getElementById("emailFormat").style.display="block";
                }
            }
        });
    }
    return false;
});

$('#formLogin').submit(function(){
    var postData = $(this).serialize();
    $.ajax({
        type: 'POST',
        data: postData,
        url: 'http://192.168.1.15/checkUser.php',
        complete: function(data){
            //console.log(data);
            if(data.responseText){
                window.sessionStorage.setItem("pseudo", data.responseText);
                window.location.href = "accueil.html";
            }
            else{
                document.getElementById("pseudo").style.borderColor="red";
                document.getElementById("pass").style.borderColor="red";
            }
        }
    });
    return false;
});

// var xmlhttp = new XMLHttpRequest();
// var url = "http://192.168.1.15/server_customers.php";

// xmlhttp.onreadystatechange=function() {
//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//         myFunction(xmlhttp.responseText);
//     }
// }
// xmlhttp.open("GET", url, true);
// xmlhttp.send();

// function myFunction(response) {
//     var arr = JSON.parse(response);
//     var i;
//     var out = "<table>";

//     for(i = 0; i < arr.length; i++) {
//         out += "<tr><td>" +
//         arr[i].Nom +
//         "</td><td>" +
//         arr[i].Prenom +
//         "</td><td>";
//     }
//     out += "</table>";
//     document.getElementById("id01").innerHTML = out;
// }

$("#home-link, #brandLangua").click(function(){
    if(!window.sessionStorage.getItem("pseudo")){
        window.location.href = "index.html";
    }
    else{
        window.location.href = "accueil.html";
    }
});

$("#deconnexion").click(function(){
    window.sessionStorage.clear();
    window.location.href="index.html";
});
