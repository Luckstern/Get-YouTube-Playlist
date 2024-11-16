function getLatest() {
    let channelUrl = document.getElementById('url').value;
    fetch(`https://yt-api.luckstern.hackclub.app/id?url=${encodeURIComponent(channelUrl)}`, {method: "GET"})
        .then(res => res.text())
        .then(text => {
            document.getElementById("link").src = 'https://www.youtube.com/embed/videoseries?list=UULF' + text.substring(2);
            document.getElementById("instructions").style.display = "none";
        });
}

function getPopular() {
    let channelUrl = document.getElementById('url').value;
    fetch(`https://yt-api.luckstern.hackclub.app/id?url=${encodeURIComponent(channelUrl)}`, {method: "GET"})
        .then(res => res.text())
        .then(text => {
            document.getElementById("link").src = 'https://www.youtube.com/embed/videoseries?list=UULP' + text.substring(2);
            document.getElementById("instructions").style.display = "none";
        });
}

function editIframeBorderRadius() {
    if (document.fullscreenElement) {
        document.getElementById("link").style.borderRadius = "0";
    } else {
        document.getElementById("link").style.borderRadius = "0 12px 12px 0";
    }
}