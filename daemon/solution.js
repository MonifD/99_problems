function daemon(numbers, k) {
    const valueOfK = numbers[k];
    let result = true;
    if (k > 0){
        for (let i = 0; i < k; i++){
            if (numbers[i] >= valueOfK) {
                result = false; 
            }
        } 
    }

    for (let i = k + 1; i < numbers.length; i++){
        if (numbers[i] < valueOfK) {
            result = false; 
        }
    }   

    return result;
}

module.exports = { daemon };