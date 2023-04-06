//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixTvShows{
    constructor(title, genre, rating, numOfEps){
        this.name = title
        this.genre = genre
        this.rating = rating
        this.episodes = numOfEps
    } 
    play(){
        console.log('play')
    }
    stop(){
        console.log('stop')
    }
    nextEspisode(){
        console.log('Are you still watching?')
    }
}

let strangerThings = new MakeNetflixTvShows('Stranger Things', 'Thriller/Mystery', 'TV-14', 26);
let startUp = new MakeNetflixTvShows('Start Up', 'K-drama', 'TV-14', 16);
