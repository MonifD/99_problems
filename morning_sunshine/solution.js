function morning_sunshine(numbers) {
    let max_value = -Infinity;
    const result = [];
    
    for (let i = numbers.length - 1; i >= 0; i--) { 
        const num = numbers[i];
        if (num > max_value) {
            result.push(num);
            max_value = num; 
        }
    }
    
    return result.reverse();
}
module.exports = {
    morning_sunshine
}

// console.log(morning_sunshine([12, 3, 5, 2, 4])); 
// console.log(morning_sunshine([5, 4, 3, 2, 1])); 
// console.log(morning_sunshine([1, 2, 3, 4, 5]));