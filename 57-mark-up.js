const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  // location: 'Ocho Rios, Jamaica',
  // avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
function makeProfileMarckup(usersProfile){
    const { 
        avatar = "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
        name,
        tag, 
        location = "Planet Earth", 
        stats: {
            followers, 
            views, 
            likes
        }
    } = usersProfile
return `<div>
<img src="${avatar}" alt="user avatar">
<p>${name}<span>@${tag}</span></p>
<p>Location: ${location}</p>
<ul>
  <li>Followers: ${followers}</li>
  <li>Views: ${views}</li>
  <li>Likes: ${likes}</li>
</ul>
</div>`;
}
const murckUp = makeProfileMarckup(profile)
document.body.insertAdjacentHTML('afterbegin', murckUp)