const error = document.getElementById('error');
const form = document.getElementById('form1');
const ime = document.getElementById('ime_prezime');
const email = document.getElementById('email');
const checkbox = document.getElementById('checkbox');
const posalji = document.getElementById("posalji");
const danas = new Date();
console.log(form)
if (form != null) {
    console.log('usao');
    form.addEventListener('submit', (e) => {

        console.log('usao4');
        let messages = [];
        if (ime.value === "" || email.value === '') {
            console.log('usao2');
            messages.push('Ime i email ne smeju biti prazni');
        }

        if (checkbox.checked === false) {
            messages.push('Morate da imate vise od 18 godina.');
        }
        if (messages.length > 0) {
            console.log('usa3o');
            e.preventDefault();
            error.innerText = messages.join(', ')
        }
        else {
            alert("Poslato! Dobićete odgovor na mail.");
        }
    })
}


var myVar = setInterval(function () {
    myTimer();
}, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}