let totalHeight = document.body.scrollHeight -
    window.innerHeight;

window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    document.getElementById('progressbar').style.height = progressHeight + "%";
}