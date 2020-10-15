var texts = ["Bonjour", "Hola", "Hello", "Zdravstvuyte", "Nǐ hǎo", "Salve", "Konnichiwa", "Hej", "Namaste", "Privet", "Annyeong Haseyo"];
var text = "Hello.";
var i = 0;
var typingDelay = 100, deleteDelay = 1000;

function writeText() {
    var textHtml = document.getElementById("hello");
    if (text.length > i) {
        textHtml.innerHTML += text.charAt(i);
        i++;
        setTimeout(writeText, typingDelay);
    }
    else {
        i = 0;
        setTimeout(deleteText, deleteDelay);
    }
}

function deleteText() {
    document.getElementById("hello").innerHTML = "";
    randomizeText();
    writeText();
}

function randomizeText() {

    text = texts[Math.floor(Math.random() * texts.length)];
    text += ".";
    console.log();
}