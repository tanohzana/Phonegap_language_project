$('#formInscription').submit(function(){
    var postData = $(this).serialize();
    $.ajax({
        type: 'POST',
        data: postData,
        url: 'http://192.168.1.15/newUser.php',
        complete: function(){
            alert('User added !');
        }
    });
    return false;
});