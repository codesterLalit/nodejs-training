// Imperative approach
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  const str = 'Hello, World!';
  console.log(reverseString(str)); // Output: '!dlroW ,olleH'
  