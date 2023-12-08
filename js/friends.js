const friends = [
  { name: "Olga", online: false },
  { name: "Nik", online: true },
  { name: "Pueblo", online: true },
  { name: "Svitlana", online: true },
];

console.log(friends[1]);

function findFriendByName(allFriends, friendName) {
  for (const friend of friends) {
    console.log(friend.name);
    friend.name === friendName
      ? console.log("Found", friend.name)
      : console.log("Not found");
  }
}

console.log(findFriendByName(friends, "Nik"));

function getAllNames(allFriends) {
  const names = [];
  for (const friend of allFriends) {
    console.log(friend.name);
    names.push(friend.name);
  }
}

getAllNames(friends);
console.log(getAllNames(friends));

function getOnlineFriends(allFriends) {
    const onlineFriends = [];
    for (const friend of allFriends) {
        console.log(friend.online);
        if(friend.online) {
            onlineFriends.push(friend.online);
        }
    }
    return onlineFriends;
}

getOnlineFriends(friends);
console.log(getOnlineFriends(friends));
