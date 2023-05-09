// console.log("Hello world!");

let count = 0;

let CURRRENT_NUMBER = document.getElementById('numeroAtual');

function decrementar() {
    count--;
    CURRRENT_NUMBER.innerHTML = count;
}

function incrementar() {
    count++;
    CURRRENT_NUMBER.innerHTML = count;
}