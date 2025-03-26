// Prompt user for input
let maxLimit = prompt("Enter the Limit of the Double Loop:");
maxLimit = Number(maxLimit);

// Double loop iteration
console.log("Result:");
for (let i = 0; i <= maxLimit; i++) {
   for (let j = 0; j <= maxLimit; j++) {
      let addedValue = i + j;
      console.log(`[${i}][${j}] Added value is ${addedValue}`);
   }
}
