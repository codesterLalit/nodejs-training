//splice
const numbers = [1, 2, 3, 4, 5];

function removethings() {
    let test2 = numbers.splice(2, 1); // Removes 1 element at index 2
    console.log(test2)
    console.log(numbers); // Output: [1, 2, 4, 5]
}
removethings()
console.log(numbers)

//slice
// const numbers2 = [1, 2, 3, 4, 5];

// function removethings2() {
//     const slicedNumbers = numbers2.slice(1, 4);
//     console.log(slicedNumbers); // Output: [2, 3, 4]
//     console.log(numbers2)
    
// }

// removethings2()
// console.log(numbers2)