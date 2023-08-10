// Створити об'єкт для керування медіаплеєром. 
// Об'єкт повинен мати методи для додавання пісень, видалення пісень, 
// переключення наступної та попередньої пісні та паузи/продовження відтворення. 
// Також повинен бути метод для відображення поточної пісні 
// та загальної тривалості плейлисту.

const mediaPlayer = {
    songs: [],
    currentSongIndex: 0,
    isPlaying: false,
    duration: 0,
    addSong(title, artist, length){
        this.songs.push({title, artist, length})
    },
    removeSong(count){
        for(let i = 0; i < count; i++){
           let song = this.songs.pop()
           console.log(`${song.title} by ${song.artist} has been removed from the playlist.`)
        }
    },
    calculateDuration(){
        let total = 0
        for(const song of this.songs){
            total += song.length
        }
        console.log(`The total duration of the playlist is ${total} seconds.`)
        return total
    },
    play(){
        this.isPlaying = true
        console.log(`Playing ${this.songs[this.currentSongIndex].title} by ${this.songs[this.currentSongIndex].artist}`)
    },
    next(){
        if(this.currentSongIndex < this.songs.length - 1){
            this.currentSongIndex++
        }
        console.log(`Playing ${this.songs[this.currentSongIndex].title} by ${this.songs[this.currentSongIndex].artist}`)
    },
    previous(){
        if(this.currentSongIndex !== 0){
            this.currentSongIndex--
        }
        console.log(`Playing ${this.songs[this.currentSongIndex].title} by ${this.songs[this.currentSongIndex].artist}`)
    },
    pause(){
        this.isPlaying = false
        console.log(`Paused ${this.songs[this.currentSongIndex].title}.`)

    },
    displayCurrentSong(){
        console.log(`Now playing: ${this.songs[this.currentSongIndex].title}.`)
    }
        
}
  //Для перевірки
  mediaPlayer.addSong('Bohemian Rhapsody', 'Queen', 355);
  mediaPlayer.addSong('Stairway to Heaven', 'Led Zeppelin', 482);
  mediaPlayer.addSong('Hotel California', 'The Eagles', 390);
  
  mediaPlayer.calculateDuration(); // The total duration of the playlist is 1227 seconds.

  mediaPlayer.play(); // Playing Bohemian Rhapsody by Queen.
  
  mediaPlayer.next(); // Playing Stairway to Heaven by Led Zeppelin.
  
  mediaPlayer.displayCurrentSong(); // Now playing: Stairway to Heaven by Led Zeppelin.
  
  mediaPlayer.pause(); // Paused Stairway to Heaven.
  
  mediaPlayer.previous(); // Playing Bohemian Rhapsody by Queen.
  
  mediaPlayer.removeSong(1); // Hotel California by The Eagles has been removed from the playlist.