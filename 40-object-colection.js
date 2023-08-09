
// Работа з колекцією (масивом обʼєктів)

const friends = [
  { name: 'John', online: true },
  { name: 'Jane', online: true },
  { name: 'Mary', online: false },
  { name: 'Mike', online: true },
  { name: 'Adam', online: false },
  { name: 'Lisa', online: true },
];

console.table(friends);

// Шукаємо друга за іменем
const findFriendByName = function (allFriends, findFriend) {
  for (const friend of allFriends){
    console.log(friend)
    if (friend.name === findFriend) {
      return `Знайшли: ${findFriend}`;
    }
  }
  return `${findFriend} не знайшли`;
};

console.log(findFriendByName(friends, 'Mikek'));

// Отримуємо імена всіх друзів
function getAllName(allFriends) {
    const names = []
    for(const friend of allFriends) {
        names.push(friend.name)
    }
    return names;
}
console.log(getAllName(friends));

// Отримуємо імена лише друзів, які онлайн
const getOnlineFriends = function (allFriends) {
  const onlineFriends = []
  for (const friend of allFriends) { 
      if (friend.online) {
        onlineFriends.push(friend)
    }
  }
  return onlineFriends;
};
console.log(getOnlineFriends(friends));

// Створити два масиви онлайн та офлайн
// Якщо true - в перший масив
// Якщо false - в другий масив

function getFriendsByStatus(allFriends){
  const getFriendsByStatus = {
    online: [],
    offline: [],
  }
  for (const friend of allFriends) { 
    if (friend.online){
      getFriendsByStatus.online.push(friend)
      continue
    }
      getFriendsByStatus.offline.push(friend)
  }
    return getFriendsByStatus
}
console.log(getFriendsByStatus(friends));




