function showtime(){
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    if(hours >= 12 ){
        hours = hours - 12;
    }
    else if (seconds < 10) {
        seconds = "0" + seconds;
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    else if (hours < 10) {
        hours = "0" + hours;
    }
    else{
        hours = "00";
    }
    let time = hours + ':' + minutes + ':' + seconds ;
    if (time > 12){
        time = time + " AM";
    }
    else{
        time = time + " PM";
    }
    document.getElementById('time').innerHTML = ` Time : ${time}`;
    setTimeout(showtime, 1000)
}
showtime();

function validit(){
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let error = document.getElementById("error");
    var text = "";

    if(name.length <6){
        text = "name must be at least 6 characters"
        error.innerHTML = text;
        error.style.color = "red";
        error.style.fontWeight = "bold";
        error.style.display = "block";
        return false;
    }
    else if (isNaN(phone) || phone.length != 11){
        text = "phone must be number and at least 11 digits"
        error.innerHTML = text;
        error.style.color = "red";
        error.style.fontWeight = "bold";
        error.style.display = "block";
        return false;
    }
    else if (email.indexOf("@") == -1){
        text = "email must be valid"
        error.innerHTML = text;
        error.style.color = "red";
        error.style.fontWeight = "bold";
        error.style.display = "block";
        return false;
    }
    else if(password.length <8){
        text = "password must be at least 8 characters"
        error.innerHTML = text;
        error.style.color = "red";
        error.style.fontWeight = "bold";
        error.style.display = "block";
        return false;
    }
    else{
        alert("your are signed in");
        return true;
    }

}














