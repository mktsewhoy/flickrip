function showOutput() {
    var msgOutput = document.getElementById("url").value;
    if (msgOutput == "") {
        msgOutput = "Please enter a link."
    } else if (validURL(msgOutput) == false || msgOutput.indexOf("flickr.com/photos") < 0 ) {
        msgOutput = "Please enter a valid Flickr link."
    } else {
        msgOutput = "Right-click on image to save.";
        document.getElementById("flickrImg").src = getFlickr();
    }
    displayLink.innerHTML = msgOutput;
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

function getFlickr() {
    // var imageToRip = document.getElementsByTagName("img");
    var imageToRip = "https://live.staticflickr.com/2284/2482674363_7deb64101a_z.jpg";
    // var processed = "";
    // // Rip image URL from Flickr URL
    
    return imageToRip;
}