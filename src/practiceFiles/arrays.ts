// Working with arrays

const friends = [
  {
    name: 'Wesley',
    position: 'musician',
  },
  {
    name: 'Davis',
    position: 'engineer',
  },
];

// Some tslint rules are disabling use of [], example message: 
// Array type using 'T[]' is forbidden for non - simple types.Use 'Array<T>'
function getFriends(friends: Array<{ name: string; position: string }>): any {
  return friends.filter((friend) => friend.position === 'musician');
}

console.log(getFriends(friends));
