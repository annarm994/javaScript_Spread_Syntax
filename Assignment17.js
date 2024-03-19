// Task 1: Function Argument Expansion
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [10, 20, 30];
const result = sum(numbers[0], numbers[1], numbers[2]);
console.log("Task 1: \n   Sum: ", result);

// Task 2: Merging Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = array1.concat(array2);
console.log("\nTask 2: \n   Merged Array: ", mergedArray);

// Task 3: Array Element Insertion
const colors = ['red', 'green', 'blue'];
const extendedColors = ['yellow'].concat(colors).concat(['purple']);
console.log("\nTask 3: \n   Extended Colors", extendedColors);

// Task 4: Cloning and Modifying an Object
const person = {name: 'John', age: 30};
const newPerson = Object.assign({}, person, {name: 'Jane', gender: 'female'});
console.log("\nTask 4: \n   Old Person: ", person);
console.log("   New Person: ", newPerson);

// Task 5: Combining Objects
const object1 = {a: 1, b: 2};
const object2 = {b: 3, c: 4};
const combinedObject = Object.assign({}, object1, object2);
console.log("\nTask 5: \n   Combined Object: ", combinedObject);