var playlist = {Zayn: "dusk till down"};

function updatePlaylist(playlist,artistName,songTitles) {
    playlist[artistName] = songTitles;
    return playlist;
}
function removeFromPlaylist(playlist,artistName) {
   var x = delete playlist.artistName;
   return x;
}
