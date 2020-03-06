

function validate(){
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    if(!regName.test(name)){
        document.getElementById('message').innerHTML = '<p>Podaj swoje imie</p>';
        document.getElementById('name').focus();
        return false;
    }else{
        document.getElementById('message').innerHTML = '<p> Dziekujemy ;)</p>';
        return true;
    }
}

function validate(){
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('surname').value;
    if(!regName.test(surname)){
        document.getElementById('message').innerHTML = '<p>Podaj swoje imie</p>';
        document.getElementById('surname').focus();
        return false;
    }else{
        document.getElementById('message').innerHTML = '<p> Dziekujemy ;)</p>';
        return true;
    }
}
