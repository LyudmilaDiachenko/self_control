/*
 * Методи об'єкта та this при звернені до властивостей в методах
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
*/

const playlist = {
    name: "My play list",
    rating: 5,
    tracks: ["Track1", "Track2", "Track3", "Track4", "Track5"],
    play: false,
    trackCount: 3,
    addTracks(track){
        this.tracks.push(track)
    },
    changeRating(newRating){
        this.rating = newRating
    },
    getTrackCount(){
        return this.tracks.length
    },
    changeName(newName){
        this.name = newName
    },
}
console.table(playlist.tracks)

playlist.addTracks('Track23')
playlist.changeRating(1)
playlist.changeName('My new play list')

console.log('new rating:', playlist.rating)
console.log(`I have: ${playlist.getTrackCount()} tracks`)
console.log('New name playlist:', playlist.name)