 function do_a_barrel_roll(numbers, k) {

  const n = numbers.length;

  if (n === 0) {
      return numbers;
  }

  k = k % n;

  return numbers.slice(k).concat(numbers.slice(0, k));
}
  module.exports ={do_a_barrel_roll};
  
  // console.log(do_a_barrel_roll([0, 1, 2, 3], 1));
  // console.log(do_a_barrel_roll([0, 1, 2, 3], 2));
 
