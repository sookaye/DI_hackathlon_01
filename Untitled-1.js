const words = ["wow","hey","bye"];
words.some(word => word[0] === 'h'); 

let result = false;
words.forEach(word => {
  if (word[0] === 'h') {
    result = true;
  }
});

console.log(result); // returns true

////////////////
const result = words.includes('hey');
console.log(result); // returns true

//////////////
const result = words.some(word => word[0] === 'h');
console.log(result); // returns true