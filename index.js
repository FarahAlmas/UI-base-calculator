var screenD = document.getElementById('screen');
offFunc();
onFunc();
function offFunc() {
    screenD.style.background = "black";
    screenD.value = null;
}
function onFunc() {
    screenD.style.background = "white";
    screenD.click.value = "0";
}
