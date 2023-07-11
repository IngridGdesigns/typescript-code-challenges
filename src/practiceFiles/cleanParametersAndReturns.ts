// setting default parameters
// if the value isn’t passed, it takes the placeholder value, in this case ounces = 0.
function convertWeight(weight: number, ounces: number = 0): number {
  const oz = ounces ? ounces / 16 : 0;
  const total = weight + oz;
  return weight / 2.2;
}
console.log(convertWeight(34));

// passing undefined as parameter, use with caution!!
function emailGreeting(
  name: string = 'Friend',
  location: string = 'Earth'
): string {
  return `Hello ${name} from ${location}, welcome!`;
}
console.log(emailGreeting(undefined, 'mars'));
