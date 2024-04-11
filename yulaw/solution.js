function yulaw(s) {
    const occurrences = {};
    const chars = s.split('');
    for (const char of chars) {
        if (char in occurrences) {
            occurrences[char]++;
        } else {
            occurrences[char] = 1;
        }
    }
    return uniqueChars = Object.keys(occurrences).join('');
}

module.exports={yulaw};
// // Exemples d'utilisation
// yulaw("abcde"); // abcde
// yulaw("abbcdde"); // abcde
// yulaw("abcdeab"); // abcde
// yulaw("GABELAWGABRIELYULAW"); // GABELWRIYU
