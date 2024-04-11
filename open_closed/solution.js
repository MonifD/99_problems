function open_closed(s) {
    const brackets = {
        '(': 0,
        '[': 0,
        '{': 0,
        '"': 0,
        "'": 0
    };

    const stack = s.split('');

    for (let char of stack) {
        if (char in brackets) {
            brackets[char]++;
        } else if (char === ')') {
            if (brackets['('] === 0) return false;
            brackets['(']--;
        } else if (char === ']') {
            if (brackets['['] === 0) return false;
            brackets['[']--;
        } else if (char === '}') {
            if (brackets['{'] === 0) return false;
            brackets['{']--;
        } else if (char === '"') {
            brackets['"']++;
        } else if (char === "'") {
            brackets["'"]++;
        }
    }

    return Object.values(brackets).every(count => count === 0 || count % 2 === 0);
}

module.exports={open_closed};

// Exemple d'utilisation
// console.log(open_closed("(test)")); // true
// console.log(open_closed("(])"));    // false
// console.log(open_closed("]["));     // false
// console.log(open_closed("([])"));   // true
// console.log(open_closed("("));      // false
// console.log(open_closed("(()"));    // false
// console.log(open_closed("[(])"));   // true
// console.log(open_closed("[)"));     // false
// console.log(open_closed(`"`));      // false
// console.log(open_closed(`""`));     // true
// console.log(open_closed(`'`));      // false
// console.log(open_closed(`''`));     // true
