
function isEven(number) {
    for (let i = 0; i <= number; i += 2) {
        if (i === number) {
            return true;
        }
    }
    return false;
}

console.log(isEven(4)); 
console.log(isEven(7)); 



// dop zadaniy

function sumArray(array) {
    let sum = 0;
    for (let number of array) {
        sum += number;
    }
    console.log(sum);
}

sumArray([1, 2, 3, 4, 5]); 
sumArray([10, 20, 30]);   
