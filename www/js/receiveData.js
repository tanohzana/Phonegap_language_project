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

$("#home-link").click(function(){
	if(!window.localStorage.getItem("pseudo")){
		window.location.href = "index.html";
	}
	else{
		window.location.href = "accueil.html";
	}
});