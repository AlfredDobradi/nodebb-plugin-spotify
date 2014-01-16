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

Getting IDs from Spotify
---

In the playlist, right-click on either the song or the album and select 'Copy Spotify URI'. The ID is the string after the last colon character.

> Spotify URI
> spotify:album:0LUkfcP3XT922V0uhE3SDQ
>
> Album ID
> 0LUkfcP3XT922V0uhE3SDQ
