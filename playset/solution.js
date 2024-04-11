function playset(s) {
    const occurrences = {};
    const chars = s.split('');
    for (const char of chars) {
        if (char in occurrences) {
            occurrences[char]++;
            if (occurrences[char] >=2) {
                return true;
            }
        } else {
            occurrences[char] = 1;
        }
        
    }
   return false;
    
 }
 module.exports={playset};

 //  console.log(playset("abcde"));   // false
// console.log(playset("abbcdde")); // true
//  console.log(playset("abcdeab")); // true
