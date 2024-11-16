function getLatest() {
    let channelUrl = document.getElementById('url').value;
    fetch(`https://yt-api.luckstern.hackclub.app/id?url=${encodeURIComponent(channelUrl)}`, {method: "GET"})
        .then(res => res.text())
        .then(text => {
            document.getElementById("link").src = 'https://www.youtube.com/embed/videoseries?list=UULF' + text.substring(2);
        });
}

function getPopular() {
    let channelUrl = document.getElementById('url').value;
    fetch(`https://yt-api.luckstern.hackclub.app/id?url=${encodeURIComponent(channelUrl)}`, {method: "GET"})
        .then(res => res.text())
        .then(text => {
            document.getElementById("link").src = 'https://www.youtube.com/embed/videoseries?list=UULP' + text.substring(2);
        });
}