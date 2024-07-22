const mapArray = [
  {value: 1000, roman: 'M'},
  {value: 900, roman: 'CM'},
  {value: 500, roman: 'D'},
  {value: 400, roman: 'CD'},
  {value: 100, roman: 'C'},
  {value: 90, roman: 'XC'},
  {value: 50, roman: 'L'},
  {value: 40, roman: 'XL'},
  {value: 10, roman: 'X'},
  {value: 9, roman: 'IX'},
  {value: 5, roman: 'V'},
  {value: 4, roman: 'IV'},
  {value: 1, roman: 'I'},
]
/**
 * @param {number} integer
 * @returns {string} str - roman numeral string
 */
function RomantoInt(num){
let mathcd  = num.find(map=> num>=map.value)
  if(!mathcd) return '';
  let {roman,value} = mathcd; 
  return roman + RomanToInt(num-value);
}
let as = RomanToInt(800)
console.log(as);
function G(arr1,arr2){
  let a = new Set(arr1);
  let b = new Set(arr2);
  return [...a].filter(aa => b.has(aa)
}
console.log(G([1,2,3],[4,2,2])
