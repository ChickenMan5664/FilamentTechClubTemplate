
function changeColor() {
    document.getElementByld("keuntuckyfried").style.color;
   var newColor = selectNewColor(currentColor);
   document.getElementByld("helloworld").style.color = newColor;
}

function selectNewColor(currentcolor) {
    var newColor = "red";

    if (currentColor === "") {
        newColor = "red";
    } else if (currentColor === "red") {
        newColor = "purple";
    } else if (currentColor === "purple") {
        newColor = "green";
    } else if (currentColor === "green") {
        newColor = "";
    }

    return newColor;

}