// 1. sum two number (Penjumlahan)
// let a = myFunction(1,2)
// let b = myFunction(1,10)
// let c = myFunction(99,1)

// function myFunction(a, b) {
//     return a + b
// }
// console.log(a, b, c)


//2. Comparison operators, strict equality
// let a = myFunction(2, 3)
// let b = myFunction(3, 3)
// let c = myFunction(1, '1')
// let d = myFunction('1', '1')

// function myFunction(a, b) {
//     return a === b
// }
// console.log(a, b, c, d)


//3. Get type of value
// let a = myFunction(1)
// let b = myFunction(false)
// let c = myFunction({})
// let d = myFunction(null)
// let e = myFunction ('string')
// let f = myFunction (['array'])

// function myFunction(a, b) {
//     return typeof a
// }
// console.log(a, b, c, d, e, f)


//4. Get nth character of string
// let a = myFunction('abcd',1)
// let b = myFunction('zyxbwpl',5)
// let c = myFunction('gfedcba',3)

// function myFunction(a, n) {
//     return a[n - 1]
// }
// console.log(a, b, c)


//5. Remove first n characters of string
// let a = myFunction('abcdefg')
// let b = myFunction('1234')
// let c = myFunction('fgedcba')

// function myFunction(a) {
//     return a.slice(3)
// }
// console.log(a, b, c)


//6. Get last n characters of string
// let a = myFunction('abcdefg')
// let b = myFunction('1234')
// let c = myFunction('fgedcba')

// function myFunction(str) {
//     return str.slice(-3)
// }
// console.log(a, b, c)


//7. Get first n characters of string
// let a = myFunction('abcdefg')
// let b = myFunction('1234')
// let c = myFunction('fgedcba')

// function myFunction(a) {
//     return a.slice(0, 3)
// }
// console.log(a, b, c)


//8. Find the position of one string in another
// let a = myFunction('praise')
// let b = myFunction('risky')
// let c = myFunction('paris')

// function myFunction(a) {
//     return a.indexOf('is')
// }
// console.log(a, b, c)


//9. Extract first half of string
// let a = myFunction('abcdefgh')
// let b = myFunction('1234')
// let c = myFunction('gedcba')
// let d = myFunction('alya awalia azzahra')

// function myFunction(a) {
//     return a.slice(0, a.length / 2)
// }
// console.log(a, b, c, d)


//10. Remove last n characters of string
// let a = myFunction('abcdefg')
// let b = myFunction('1234')
// let c = myFunction('hgedcba')

// function myFunction(a) {
//     return a.slice(0, -3)
// }
// console.log(a, b, c)


//11. Return the percentage of a number
// let a = myFunction(100, 50)
// let b = myFunction(10, 1)
// let c = myFunction(500, 25)

// function myFunction(a, b) {
//     return a * b / 100
// }
// console.log(a, b, c)


//12. Basic JavaScript math operators
// let a = myFunction(6,5,4,3,2,1)
// let b = myFunction(6,2,1,4,2,3)
// let c = myFunction(2,3,6,4,2,3)

// function myFunction(a, b, c, d, e, f) {
//     return (((a + b - c) * d) / e) ** f
// }
// console.log(a, b, c)


//13. Check whether a string contains another string and concatenate
// let a = myFunction('cheese', 'cake')
// let b = myFunction('lips', 's')
// let c = myFunction('Java', 'script')
// let d = myFunction(' think, therefore I am', 'I')

// function myFunction(a, b) {
//     return a.indexOf(b) === -1 ? a + b : b + a
// }
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)


//14. Check if a number is even
// let a = myFunction(10)
// let b = myFunction(-4)
// let c = myFunction(5)
// let d = myFunction(-111)

// function myFunction(a) {
//     return a % 2 === 0
// }
// console.log(a, b, c, d)


//15. How many times does a character occur?
// let a = myFunction('m', 'how many times does the character occur in this sentence?')
// let b = myFunction('h', 'how many times does the character occur in this sentence?')
// let c = myFunction('?', 'how many times does the character occur in this sentence?')
// let d = myFunction('z', 'how many times does the character occur in this sentence?')

// function myFunction(a, b) {
//     return b.split(a).length - 1
// }
// console.log(a, b, c, d)


//16. Check if a number is a whole number
// let a = myFunction(4)
// let b = myFunction(1.123)
// let c = myFunction(1048)
// let d = myFunction(10.48)

// function myFunction(a, b) {
//     return a - Math.floor(a) === 0 
// }
// console.log(a, b, c, d)


//17. Multiplication, division, and comparison operators
// let a = myFunction(10, 100)
// let b = myFunction(90, 45)
// let c = myFunction(8, 20)
// let d = myFunction(2, 0.5)

// function myFunction(a, b) {
//   return a < b ? a / b : a * b
// }
// console.log(a, b, c, d)


//18. Round a number to 2 decimal places
// let a = myFunction(2.12397)
// let b = myFunction(3.136)
// let c = myFunction(1.12397)
// let d = myFunction(26.1379)

// function myFunction(a) {
//     return Number(a.toFixed(2))
// }
// console.log(a, b, c, d)


//19. Split a number into its digits
let a = myFunction(10)
let b = myFunction(931)
let c = myFunction(193278)

function myFunction(a) {
    const string = a + ''
    const strings = string.split('')
    return strings.map(digit => Number(digit)) //atau bisa juga langsung return [...a+''].map(v => +v)
}
console.log(a)
console.log(b)
console.log(c)

