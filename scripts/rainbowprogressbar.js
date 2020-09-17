let totalHeight = document.body.scrollHeight -
    window.innerHeight;

window.onscroll = function () {

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressbar").style.height = scrolled + "%";

    // Testing something.
    // let progressHeight = (window.pageYOffset / totalHeight) * 100;
    // document.getElementById("progressbar").style.height = progressHeight + "%";
}
