var txt_input = document.querySelector("#txt-input");
var btn_translate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
var message = document.querySelector("#message");

var serverURL = "https://api.funtranslations.com/translate/dolan.json";

btn_translate.addEventListener("click", clickEventHandler);

function getTranslatedURL(text) {

    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error Occured:", error);
    alert("Something wrong with server! Please try again after sometime");
}



function clickEventHandler() {
    var input_text = txt_input.value;
    if (input_text) {
        message.style.display = "none";
        fetch(getTranslatedURL(input_text))
            .then(response => response.json())
            .then(json => {
                outputDiv.innerText = json.contents.translated;
            }).catch(errorHandler);
    } else {
        message.style.display = "block";
        message.innerText = "Please write something to translate."
    }
}