const searchSongs = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    // load data
    fetch(url)
    .then(res => res.json())
    .then(data => displaySongs(data))
}

const displaySongs = songs => {
    console.log(songs);
    
}