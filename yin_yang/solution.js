function yin_yang(s) {


    let map = new Map();
    map.set("(", ")");
    map.set("[", "]");
    map.set("{", "}");
   

    let stack = [];
    let DoubleOpen = false;
    let singleOpen = false;
    for (let c of s) {
        if (c === "\"") {
            if (DoubleOpen) {
                if (stack.pop() !== "\"") {
                    return false;
                }
                DoubleOpen = false;
            } else {
                stack.push("\"");
                DoubleOpen = true;
            }
        }else if (c === "\'") {
            if (singleOpen) {
                if (stack.pop() !== "\'") {
                    return false;
                }
                singleOpen = false;
            } else {
                stack.push("\'");
                singleOpen = true;
            }
        } else if (map.has(c)) {
            stack.push(map.get(c));
        } else if (c !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0 && (!DoubleOpen || !singleOpen) ; 
}
module.exports={ yin_yang };


// Tests
//  console.log(yin_yang(""));       // true
// console.log(yin_yang("]["));       // false
// console.log(yin_yang("([])"));     // true
// console.log(yin_yang("(')'"));     // false
// console.log(yin_yang("(()"));      // false
// console.log(yin_yang("[(])"));     // false
// console.log(yin_yang("[]"));       // true 
// console.log(yin_yang(""));         // flase
// console.log(yin_yang("\"\""));     // true
// console.log(yin_yang("''"));       // true
// console.log(yin_yang("'([])'"));   // true
// console.log(yin_yang("\'\"\"\'")); // true