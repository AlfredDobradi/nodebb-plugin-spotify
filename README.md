nodebb-plugin-spotify
=====================

NodeBB plugin for embedding songs and albums on Spotify

Currently embeddable types are albums and songs. I'll add the possibility to embed playlists as well.

Usage
---

Songs:
```
[[spotify track=<track_id>]]
```

Albums:
```
[[spotify album=<album_id>]]
```

Playlists:
```
[[spotify user=<user_name> playlist=<playlist_id>]]
```

Getting album and song IDs from Spotify
---

In the playlist/queue, right-click on either the song or the album and select 'Copy Spotify URI'. The ID is the string after the last colon character.

> Spotify URI  
> spotify:album:0LUkfcP3XT922V0uhE3SDQ
>  
> Album ID  
> 0LUkfcP3XT922V0uhE3SDQ

Getting Playlist data from Spotify
---

In your sidebar, right-click on the playlist you want to embed, then select 'Copy Spotify URI'. The user name will be the string after 'user:', playlist ID will the string after 'playlist:'

> Spotify URI  
> spotify:user:barveyhirdman:playlist:7qkKaHez1Wvwfz6DYHA026
>
> User name  
> barveyhirdman  
>
> Playlist  
> 7qkKaHez1Wvwfz6DYHA026
