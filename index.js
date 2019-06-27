function showOutput() {
    var urlOutput = document.getElementById("url").value;
    if (urlOutput == "") {
        urlOutput = "Please enter a link."
    } else if (validURL(urlOutput) == false || urlOutput.indexOf("flickr.com/photos") < 0 ) {
        urlOutput = "Please enter a valid Flickr link."
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

function validURL(str) {
    var regex = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
    '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i');
    if(!regex .test(str)) {
    //   alert("Please enter a valid link.");
      return false;
    } else {
      return true;
    }
}