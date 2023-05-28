// let sum = (a, b, ...test) => {
//     console.log(test)
//     return a + b
// };

// console.log(sum(1, 2, "test", "test")); // 3


// 
// let double = n => n * 2;
// // roughly the same as: let double = function(n) { return n * 2 }

// console.log( double(3) ); // 6


// callbacks
function myDisplayer(some) {
    console.log(some)
  }
  
  function myCalculator(num1, num2, test) {
    let sum = num1 + num2;
    test(sum);
  }
  
  myCalculator(5, 5, myDisplayer);