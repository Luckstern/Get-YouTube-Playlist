async function getID(url) {
    const response = fetch(`https://yt-api.luckstern.hackclub.app/id?url=${encodeURIComponent(url)}`, {method: "GET"});
    if (response.ok) {
        return await response.text();
    }
}

function getLatest() {
    let channelUrl = document.getElementById('url').value;
    let id = getID(channelUrl).substring(2);
    
}

function getPopular() {
    // TODO
}