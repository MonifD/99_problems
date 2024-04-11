function set_et_match(numbers, n) {
    const set = new Set();

    for (let i = 0; i < numbers.length; i++) {
        const complement = n - numbers[i];
        if (set.has(complement)) {
            return true;
        }
        set.add(numbers[i]);
    }

    return false;
}

//console.log(set_et_match([1, 2, 3, 4, 5], 8));
module.exports = { set_et_match };