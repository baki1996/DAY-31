"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeLastElement(arr) {
    return arr.pop();
}
// Example: Removing the last fruit from the array
const fruits = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruits)); // Outputs: 'Cherry'
console.log(fruits); // Outputs: ['Apple', 'Banana']
// Here, we take out the last fruit and show the updated list.
