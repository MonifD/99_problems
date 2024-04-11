function falafel(s) {
    const charCount = {};
    let oddCount = 0;

  
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++;
        }
        if (oddCount > 1) {
            return false;
        }
    }

    return true;
}

module.exports = {
    falafel
}
   
