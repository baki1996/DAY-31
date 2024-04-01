"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function replaceBananaWithMango(fruits) {
    const index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
const fruits = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits);
