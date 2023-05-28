// // Number

// // both as number and float
// let n =  123;
// n = 12.345

// console.log(1/0)
// console.log(Infinity)
// console.log("not a number" / 2)
// console.log( NaN + 1 ); // NaN
// console.log( 3 * NaN ); // NaN
// console.log( "not a number" / 2 - 1 );


// // big int
// console.log(9007199254740991 + 1); // 9007199254740992
// console.log(9007199254740991 + 2); // 9007199254740992


// // the "n" at the end means it's a BigInt
// const bigInt = 1234567890123456789012345678901234567890n;

// // String
// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${ 1 + 2 * 2}`;

// console.log(phrase)
// // boolean value 
// let nameFieldChecked = true; // yes, name field is checked
// let ageFieldChecked = false; // no, age field is not checked

// let isGreater = 4 > 1;

// console.log( isGreater ); // true (the comparison result is "yes")


//null
// let age = null;

// //undefined
// let something
// console.log(something)


// // map

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size );
map.delete(1)
console.log( map.size ); // 3


// // object as keys 
// let john = { name: "John" };

// // for every user, let's store their visits count
// let visitsCountMap = new Map();

// // john is the key for the map
// visitsCountMap.set(john, 123);

// console.log( visitsCountMap.get(john) ); // 123

// // itterating maps

// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ]);
  
//   // iterate over keys (vegetables)
//   for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // cucumber, tomatoes, onion
//   }
  
//   // iterate over values (amounts)
//   for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
//   }
  
//   // iterate over [key, value] entries
//   for (let entry of recipeMap) { // the same as of recipeMap.entries()
//     console.log(entry); // cucumber,500 (and so on)
//   }


//   // sets

//   let set = new Set();

//   let john2 = { name: "John" };
//   let pete = { name: "Pete" };
//   let mary = { name: "Mary" };
  
//   // visits, some users come multiple times
//   set.add(john2);
//   set.add(pete);
//   set.add(mary);
//   set.add(john2);
//   set.add(mary);
  
//   // set keeps only unique values
//   console.log( set.size ); // 3
  
//   for (let user of set) {
//     console.log(user.name); // John (then Pete and Mary)
//   }

// // unique array using set
  var myArray = ['a', 1, 'a', 2, '1'];

  let unique = [...new Set(myArray)];
  console.log(unique); // unique is ['a', 1, 2, '1']
