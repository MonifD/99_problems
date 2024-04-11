function tux(numbers) {
    const n = numbers.length;
    
    if (n == 0) {
        return -1;
    }
    if (n == 1) {
        return 0;
    }

    let rightMin = new Array(n); // Tableau pour stocker les minimaux de droite
    
    rightMin[n - 1] = numbers[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMin[i] = Math.min(rightMin[i + 1], numbers[i]);
    }
    
    for (let i = 0; i < n - 1; i++) {
        if (i === 0 && numbers[i] <= rightMin[i]) {
            return i;
        } else if (i > 0 && numbers[i - 1] < numbers[i] && numbers[i] <= rightMin[i]) {
            return i;
        }
    }
    
    return -1;
}

// console.log(tux([])); 
// console.log(tux([1])); 
// console.log(tux([1,3])); 
// console.log(tux([1,1,1])); 
// console.log(tux([100, 97, 101, 109, 111, 110])); 
// console.log(tux([116, 117, 120])); 
// console.log(tux([97, 98, 97, 99, 117, 108, 101]));
module.exports = { tux };