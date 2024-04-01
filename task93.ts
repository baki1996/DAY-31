
function replaceBananaWithMango(fruits: string[]): void {
    const index = fruits.indexOf("Banana"); 
    if (index !== -1) fruits[index] = "Mango"; 
}


const fruits: string[] = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits);
console.log(fruits); 