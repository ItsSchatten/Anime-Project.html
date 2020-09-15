

var images = ['merchimages/DemonSlayerPoster.jpg', 'merchimages/AkameGaKillPoster.jpg', 'merchimages/DarlingintheFranxxPoster.jpg', 'merchimages/AngelsofDeathPoster.jpg', 'merchimages/ServampPoster.jpg', 'merchimages/OwarinoseraphPoster.jpg']; // array of pictures
var stop = '0';
var sent = true;

while (sent) {
    var input = prompt('Give a number 1 through 6. Type 0 to exit.');

    if (input === stop) {
        console.log("Received the stop input, just showing the user the site.")
        sent = false;
        break;
    }
    else {
        if (!isNaN(input) && images.length >= input) {
            showImage("merchimages/DemonSlayerPoster.jpg", input, "Some random image that I know nothing about!");
        }
        sent = false;
    }
}

function showImage(image, input) {
    var path = document.getElementById("storePage");

    console.log(input + " was the input we received.")

    for (amount = 0; amount < input; amount++) {
        var img = document.createElement("img");
        img.setAttribute('class', 'animeMerchSize')
        console.log("Setting image " + images[amount] + " to the web document.")
        img.src = images[amount]
        path.appendChild(img);
    }
}

function reloadStore() {
    console.log(document.getElementById("storePage").childNodes);

    sent = true;
}
