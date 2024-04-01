const form = document.querySelector('form');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    var mail = document.getElementById('user').value;
    var pass = document.getElementById('Pass').value;

    var verify = check(mail, pass);
    if (verify == true) {
        alert("Login!");
        window.location.href = "demo.html";
    } else {
        alert("Wrong email or password!");
    }

});
function check(mail, pass) {

    if (mail == "anushamoola@gmail.com" && pass == "12345") {
        return true;
    } else {
        return false;
    }
};