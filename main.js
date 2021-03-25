/* So this is our main code to the program, it has an object and an array as its sources,
then by a function it chooses first if it will be a warning or recomendation, then if it's a warning
it chooses an artist from the array, if it's a recomendation it chooses an artist from the object and
from this artist albums nested array, and finally all its logged.
*/

// first list to choose from, this will be chosen by a randomizer.
const goodMusic = {
    bandOrArtist: {
        'Guns n Roses': {
            albums: ['Appetite for Destruction', 'GNR Lies', 'Use Your Illusion']
        },
        'Daft Punk': {
            albums: ['Homework', 'Discovery', 'Human After All']
        },
        'Michael Jackson': {
            albums: ['Thriller', 'Dangerous', 'Bad', 'Off the wall', 'HIStory']
        },
        'The Killers': {
            albums: ['Hot Fuss', 'Sam\'s Town', 'Day & Age', 'Battle Born']
        },
        'Fleetwood Mac': {
            albums: ['Fleetwood Mac', 'Rumours', 'Mirage', 'Tusk', 'The Dance']
        }
    }
};

// second list, in this one we will not need an album as it wont be needed.
const badMusic = ['Nickelback', 'Creed', 'The Pussycat Dolls', 'Milli Vanilli', 'Lil\' Romeo'];

// function to choose which message should appear and which options to choose
const musicSelector = () => {
    
    let bandName = []; //Array for all the band types in the goodMusic object
    
    let albumName = []; //Array for the number of albums there are in the almbum key of the band name
    
    let goodOrBad = Math.floor(Math.random() * 2); // this one decides if it should give you a good or bad band or artist
    
    for (artist in goodMusic.bandOrArtist) {
        bandName.push(artist);
    }; // this function adds the artists to the bandName array.
    
    let randomBadBand = Math.floor(Math.random() * badMusic.length); //this is a randomizer to choose the bad recomendation
    
    let randomGoodBand = Math.floor(Math.random() * bandName.length);  //this randomizer for choosing the cand album
    
    for (album in goodMusic.bandOrArtist[bandName[randomGoodBand]].albums) {
        albumName.push(album);
    }; // in this function we push the albums to the albumName array.
    
    let randomAlbum = Math.floor(Math.random() * albumName.length); //we use this randomizer to choose the album name.
      
    
    if (goodOrBad === 0) {
        return (`You should never listen to ${badMusic[randomBadBand]}`); 
    } else {
        return (`You should listen to ${bandName[randomGoodBand]} and the album ${goodMusic.bandOrArtist[bandName[randomGoodBand]].albums[randomAlbum]}`);
    }; //This conditional gives us the recomendation, it's a little lengthy but it works.
}

musicSelector();