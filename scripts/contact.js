let submitButton = document.getElementById("submit-button");
let main = document.querySelector("main");

function submitted() {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "Thank you for your message";
    paragraph.style.fontSize = "24px";
    main.innerHTML = '';
    main.appendChild(paragraph);
}

submitButton.addEventListener("click", submitted);
