function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
		 document.getElementById("pageIndex").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET", "about.txt", true);
	xhttp.send();
}