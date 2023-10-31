/* 
Challenge:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ['florencia', 'amado', 'camilo', 'dolores'];
// -->        ["Florencia", "Amado", "Camilo", "Dolores"]
// Your code here
const capitalized = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});

console.log(capitalized);
