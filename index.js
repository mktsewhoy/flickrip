function showOutput() {
    var urlOutput = document.getElementById("url").value;
    if (urlOutput == "") {
    // if (urlOutput == "" || checkFlickr(urlOutput) == false) {
        urlOutput = "Please enter a valid link."
    }
    displayLink.innerHTML = urlOutput;
}

// function checkFlickr(url) {
//     var check = true;
//     if (url == "" || ) {
//         urlOutput = "Please enter a valid link."
//     }
//     // else {}
// }