const profile = {
    name: 'Pueblo Master',
    tag: 'sdsd',
    location: 'Jamaica',
    avatar: 'http://sdsdsdsdsd',
    stats: {
      followers: 5603,
      views: 2345,
      likes: 1235,
    },
}
function makeProfileMarckup(usersProfile){
    const { 
        avatar = "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
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
const murckUp = makeProfileMarckup(profile)
document.body.insertAdjacentElement(document.body)