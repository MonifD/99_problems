function stormtroopers(numbers) {
    const countMap = {};
    for (const num of numbers) {
        countMap[num] = (countMap[num] || 0) + 1;
    }
    
    const result = [];
    for (const num in countMap) {
        if (countMap[num] === 1) {
            result.push(parseInt(num));
        }
    }

    return result;
}

module.exports = {
     stormtroopers
};

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const result = stormtroopers(numbers);
// console.log(result);
