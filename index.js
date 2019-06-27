function showOutput() {
    var urlOutput = document.getElementById("url").value;
    if (urlOutput == "") {
    // if (urlOutput == "" || checkURL(urlOutput) == false) {
        urlOutput = "Please enter a valid link."
    }
    displayLink.innerHTML = urlOutput;
}

function detectEnter(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) { //Enter keycode
        // alert("Sending your Message : " + document.getElementById('txt').value);
        showOutput()
    }
}

// function checkFlickr(url) {
//     var check = false;
//     if (url == "" || ) {
//         urlOutput = "Please enter a valid link."
//     }
//     // else {check = true}
// }