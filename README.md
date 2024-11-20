# Get Channel Playlists

## What is this
YouTube used to have a button that let you watch all the videos on a channel through a playlist which was perfect for binging a new channel you just found. Unfortunately, they removed the feature at some point which was super disappointing. But, they never removed the full channel playlist, so all you need is the right URL for it to work.

## How it works
For the channel URL, the handle(the @whateverchannel part) of the link is sent to the YouTube API to grab the channel ID which is a random string of letters, numbers, and characters that were used before YouTube switched to the handle system. Then, the playlist ID for the latest videos is **UULF** in front of the 3rd character in the channel ID. The playlist ID for the popular videos is **UULP** in front of the 3rd character in the channel ID. Then, that ID is added to a playlist embed link in an iframe.

## Instructions
1. First, input the channel URL into the text box.
2. Then, select either **Get Latest Videos** or **Get Popular Videos** to get the corresponding link.
3. Finally, watch the videos in the iframe or click **Watch on YouTube** to watch the videos.
4. Enjoy!