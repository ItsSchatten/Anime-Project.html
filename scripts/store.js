var images = ['merchimages/DemonSlayerPoster.jpg', 'merchimages/AkameGaKillPoster.jpg', 'merchimages/DarlingintheFranxxPoster.jpg', 'merchimages/AngelsofDeathPoster.jpg', 'merchimages/ServampPoster.jpg', 'merchimages/OwarinoseraphPoster.jpg']; // array of pictures
var stop = '0';
var sent = true;

function getInput() {
    while (sent) {
        var input = prompt('Give a number 1 through 6. Type 0 to exit.');
        
        if (input === "x") {
            showImage(6);
        }

        if (images.length < input) {
            alert("WOAH! Calm down their slick! We don't have that many items in our store.");
            continue;
        }

        if (input === stop) {
            console.log("Received the stop input, just showing the user the site.")
            sent = false;
            break;
        }
        else if (!isNaN(input) && images.length >= input) {
            showImage(input);
        }
        sent = false;
    }

}
function showImage(input) {
    var path = document.getElementById("storePage");

    console.log(input + " was the input we received.")

    for (amount = 0; amount < input; amount++) {
        var imgDiv = document.createElement("li");
        var img = document.createElement("img");
        img.setAttribute('class', 'animeMerchSize')
        console.log("Setting image " + images[amount] + " to the web document.")
        img.src = images[amount]
        imgDiv.appendChild(img)
        path.appendChild(imgDiv);
    }

    console.log('called end of function.')
}

function reloadStore() {
    while (document.getElementById("storePage").firstChild) {
        document.getElementById("storePage").removeChild(document.getElementById("storePage").firstChild)
    }

    sent = true;
    getInput();
}

getInput();
