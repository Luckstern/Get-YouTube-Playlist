function getLatest() {
    let channelUrl = document.getElementById('url').value;
    fetch(`https://yt-api.luckstern.hackclub.app/id?url=${encodeURIComponent(channelUrl)}`, {method: "GET"})
        .then(res => res.text())
        .then(text => {
            //let id = 'https://www.youtube.com/playlist?list=UULF'+text.substring(2);
            let id = 'https://www.youtube.com/embed/videoseries?list=UULF'+text.substring(2);
            document.getElementById("link").src = id;
            //document.getElementById("link").innerHTML = id;
        });
}

function getPopular() {
    let channelUrl = document.getElementById('url').value;
    fetch(`https://yt-api.luckstern.hackclub.app/id?url=${encodeURIComponent(channelUrl)}`, {method: "GET"})
        .then(res => res.text())
        .then(text => {
            //let id = 'https://www.youtube.com/playlist?list=UULP'+text.substring(2);
            let id = 'https://www.youtube.com/embed/videoseries?list=UULP'+text.substring(2);
            document.getElementById("link").src = id;
            //document.getElementById("link").innerHTML = id;
        });
}