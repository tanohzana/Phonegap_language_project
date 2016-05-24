
$('#formInscription').submit(function(){
    var postData = $(this).serialize();
    $.ajax({
        type: 'POST',
        data: postData,
        url: 'http://192.168.1.15/newUser.php',
        complete: function(data){
            //console.log(data);
            alert(data.responseText); //REDIRECTION
        }
    });
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
            alert(data.responseText); //REDIRECTION
        }
    });
    return false;
});