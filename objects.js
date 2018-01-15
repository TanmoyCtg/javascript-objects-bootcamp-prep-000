var playlist = {Zayn: "dusk till down"};

function updatePlaylist(playlist,artistName,songTitles) {
    playlist[artistName] = songTitles;
    return playlist;
}
function removeFromPlaylist(playlist,artistName) {
  return delete playlist.artistName;
}
