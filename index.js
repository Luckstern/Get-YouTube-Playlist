async function getID(url) {
    fetch(`https://yt-api.luckstern.hackclub.app/id?url=${encodeURIComponent(url)}`, {method: "GET"})
        .then(res => res.text())
        .then(text => console.log(text));
}

function getLatest() {
    let channelUrl = document.getElementById('url').value;
    let id = getID(channelUrl).substring(2);
    
}

function getPopular() {
    // TODO
}