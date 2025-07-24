// 5 > 3
// 10 == 5
// NAO (5 < 10)
// 6 % 2 == 0 E 6 > 3

let a = 5
let b = 3
let c = 10
let d = 6

console.log(a > b) // true
console.log(c == a) //false
console.log(!(a < c)) //false
console.log((d % 2) == 0 && (d > b)) //true