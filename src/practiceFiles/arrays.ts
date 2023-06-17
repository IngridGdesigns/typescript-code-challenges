// Working with arrays exercise

const friends: { name: string; position: string }[] = [
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
// instead write: function getFriends(friends: Array<{ name: string; position: string }>): any {
function getFriends(friends: { name: string; position: string }[]): any {
  return friends.filter((friend) => friend.position === 'musician');
}

console.log(getFriends(friends));

type User = {
  id: number;
  name: string;
};

type UserGroup = {
  [key: string]: User;
};

var obj: UserGroup = {
  '0': { id: 0, name: 'Tivoli' },
  '1': { id: 1, name: 'Stuart' },
  '2': { id: 2, name: 'Carlo' },
};
// or if you make it an array
var arr: User[] = [
  { id: 0, name: 'Available' },
  { id: 1, name: 'Ready' },
  { id: 2, name: 'Started' },
];
