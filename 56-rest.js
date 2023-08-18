
//  Деструктуризація об'єкта
//  - Значения по дефолту
//  - Імʼя змінної, яке відрізняється від імені властивості

// const playlist = {
//     name: 'playlist',
//     rating: 5,
//     tracks: ['track1', 'track2', 'track3', 'track4', 'track5'],
//     trackCount: 3,
// }
// const { name, rating, tracks, trackCount: numberOfTracks = 0 } = playlist
// console.log(`Навза плейлиста: ${name}`)
// console.log(rating)
// console.log(numberOfTracks)

//*! Глибока деструктуризація
// const playlist2 = {
//     name: 'playlist',
//     rating: 5,
//     tracks: {
//         track1: "Same tracks1", 
//         track2: "Same tracks2", 
//         track3: "Same tracks3",
//         track4: {
//             songsName: "Same tracks4",
//             artistName: "Artist",
//         },
//     },
//     trackCount: 3,
// }
// const { 
//     name, 
//     rating, 
//     trackCount, 
//     tracks: { 
//         track1, 
//         track2, 
//         track3 ,
//         track4: { songsName, artistName },
//     }
//  } = playlist2
// console.log(name)
// console.log(rating)
// console.log(track1)
// console.log(songsName)
// console.log(artistName)

// // Операція rest (збір)
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...restProps } = profile;
// console.log(name, tag);
// console.log(location);
// console.log(restProps);
// console.log(restProps.stats.views)

//  Патерн «Об'єкт налаштувань»
//  - деструктуризація параметра-об'єкта в підписі функції
//  - rest при деструктуризації в підписі






const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
function showProfileInfo(usersProfile){
    const{ name, tag, location, ...restProps } = usersProfile
    console.log( name, tag, location, restProps.avatar, restProps.stats.followers, restProps.stats.views, restProps.stats.likes)
}

showProfileInfo(profile)