function getLatest() {
    if (document.getElementById('channel-input').checkValidity()) {
        document.getElementById("status").innerText = "";
        let channelInput = document.getElementById('channel-input').value;
        if (document.getElementById("manual").checked) {
            document.getElementById("link").src = 'https://www.youtube.com/embed/videoseries?list=UULF' + channelInput.substring(2);
            document.getElementById("instructions").style.display = "none";
        } else {
            fetch(`https://yt-api.luckstern.hackclub.app/id?url=${encodeURIComponent(channelInput)}`, {method: "GET"})
                .then(res => res.text())
                .then(text => {
                    document.getElementById("link").src = 'https://www.youtube.com/embed/videoseries?list=UULF' + text.substring(2);
                    document.getElementById("instructions").style.display = "none";
                });
        }
    } else {
        document.getElementById("status").innerText = "Please enter a valid input!";
    }
}

function getPopular() {
    if (document.getElementById('channel-input').checkValidity()) {
        document.getElementById("status").innerText = "";
        let channelInput = document.getElementById('channel-input').value;
        if (document.getElementById("manual").checked) {
            document.getElementById("link").src = 'https://www.youtube.com/embed/videoseries?list=UULP' + channelInput.substring(2);
            document.getElementById("instructions").style.display = "none";
        } else {
            fetch(`https://yt-api.luckstern.hackclub.app/id?url=${encodeURIComponent(channelInput)}`, {method: "GET"})
                .then(res => res.text())
                .then(text => {
                    document.getElementById("link").src = 'https://www.youtube.com/embed/videoseries?list=UULP' + text.substring(2);
                    document.getElementById("instructions").style.display = "none";
                });
        }
    } else {
        document.getElementById("status").innerText = "Please enter a valid input!";
    }
}

function editIframeBorderRadius() {
    if (document.fullscreenElement) {
        document.getElementById("link").style.borderRadius = "0";
    } else {
        document.getElementById("link").style.borderRadius = "0 12px 12px 0";
    }
}

function manualInput(e) {
    if (e.target.checked) {
        document.getElementById("channel-label").innerText = "Channel ID";
        document.getElementById("channel-input").placeholder = "UCBR8-60-B28hp2BmDPdntcQ";
        document.getElementById("channel-input").pattern = "([A-Za-z0-9]*(-[A-Za-z0-9]*)*)";
    } else {
        document.getElementById("channel-label").innerText = "Channel Link";
        document.getElementById("channel-input").placeholder = "https://www.youtube.com/@YouTube";
        document.getElementById("channel-input").pattern = "(https://)?(www.)?youtube.com/@[A-Za-z]+";
    }
}