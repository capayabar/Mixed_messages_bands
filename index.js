/* So this is our main code to formulate the program, first we will need to create 3 data bases
each one with unique phrases but in a way that can compliment each other, so we can make some way to
randomize them and print them out in an ordered way to the user. 
*/

// first list to choose from, this will be chosen by a randomer.
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
    let bandName = [];
    let albumName = [];
    let randomBadBand = Math.floor(Math.random() * badMusic.length);
    let goodOrBad = Math.floor(Math.random() * 2);
    for (artist in goodMusic.bandOrArtist) {
        bandName.push(artist);
        console.log(bandName);
    }
    
    if (goodOrBad === 0) {
        console.log(`You should never listen to ${badMusic[randomBadBand]}`);
    } 
    let randomArtist = [];
    let randomAlbum = [];
}

musicSelector();