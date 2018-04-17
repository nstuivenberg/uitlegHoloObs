function overlay(image) {
    const img = image;
    let imgElement = document.createElement("img");

    imgElement.setAttribute("src", img.getAttribute("src"));

    let element = document.getElementById("overlay");
    element.style.display = "block";

    element.appendChild(imgElement);

}

function closeOverlay() {
    let divEle = document.getElementById("overlay");
    divEle.style.display = "none";
    while (divEle.hasChildNodes()) {
        divEle.removeChild(divEle.firstChild);
    }

}

function myFunction() {
    let x = document.getElementById("myTopNav");
    if (x.className === "toppie") {
        x.className += " responsive";
    } else {
        x.className = "toppie";
    }
}