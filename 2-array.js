//1. Get nth element of array (Dapatkan elemen array ke-n)
// let a = myFunction([1,2,3,4,5],3)
// let b = myFunction([10,9,8,7,6],5)
// let c = myFunction([7,2,1,6,3],1)

// function myFunction(a, n) {
//     return a[n - 1] // karena indeks array mulai dr 0, makan n-1
// }
// console.log(a, b, c)


//2. Remove first n elements of an array (Hapus n elemen pertama dari sebuah array)
// let a = myFunction([1,2,3,4])
// let b = myFunction([5,4,3,2,1,0])
// let c = myFunction([99,1,1])

// function myFunction(a) {
//     return a.slice(3)
// }
// console.log(a, b, c)


//3. Get last n elements of an array (Mendapatkan n elemen terakhir dari sebuah array)
// let a = myFunction([1,2,3,4])
// let b = myFunction([5,4,3,2,1,0])
// let c = myFunction([99,1,1])

// function myFunction(a) {
//     return a.slice(-3)
// }
// console.log(a, b, c)


//4. Get first n elements of an array (Dapatkan n elemen pertama dari sebuah array)
// let a = myFunction([1,2,3,4])
// let b = myFunction([5,4,3,2,1,0])
// let c = myFunction([99,1,1])

// function myFunction(a) {
//     return a.slice(0, 3)
// }
// console.log(a, b, c)


//5. Return last n array elements (Kembalikan n elemen array terakhir)
// let a = myFunction([1, 2, 3, 4, 5], 2)
// let b = myFunction([1, 2, 3], 6)
// let c = myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)

// function myFunction(a, n) {
//     return a.slice(-n)
// }
// console.log(a, b, c)


//6. Remove a specific array element (Hapus elemen array tertentu)
//Harus menghapus semua elemen yang sama
// let a = myFunction([1,2,3], 2)
// let b = myFunction([1,2,'2'], '2')
// let c = myFunction([false,'2',1], false)
// let d = myFunction([1,2,'2',1], 1)

// function myFunction(a, b) {
//     return a.filter(cur => cur !== b)
// }
// console.log(a, b, c, d)


//7. Count number of elements in JavaScript array (Hitung jumlah elemen dalam array JavaScript)
// let a = myFunction([1,2,2,4])
// let b = myFunction([9,9,9])
// let c = myFunction([4,3,2,1,0])

// function myFunction(a) {
//     return a.length
// }
// console.log(a, b, c)


//8. Count number of negative values in array (Hitung jumlah nilai negatif dalam array)
// let a = myFunction([1,-2,2,-4])
// let b = myFunction([0,9,1])
// let c = myFunction([4,-3,2,1,0])

// function myFunction(a) {
//     return a.filter(num => num < 0).length
// }
// console.log(a, b, c)


//9. Sort an array of numbers in descending order (Urutin angka menurun)
// let a = myFunction([1,3,2])
// let b = myFunction([4,2,3,1])

// function myFunction(arr) {
//     return arr.sort((a, b) => b - a)
// }
// console.log(a, b)


//10. Calculate the sum of an array of numbers (Menghitung jumlah/pertambahan array angka)
// let a = myFunction([10,100,40])
// let b = myFunction([10,100,1000,1])
// let c = myFunction([-50,0,50,200])

// function myFunction(a) {
//     return a.reduce((acc, cur) => acc + cur, 0);
// }
// console.log(a, b, c)


//11. Return the average of an array of numbers (Mengembalikan rata-rata serangkaian angka)
// let a = myFunction([10,100,40])
// let b = myFunction([10,100,1000])
// let c = myFunction([-50,0,50,200])

// function myFunction(arr) {
//     return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
// }
// console.log(a, b, c)


//12. Sort an array of strings alphabetically (Urutkan array string berdasarkan abjad)
// let a = myFunction(['b', 'c', 'd', 'a'])
// let b = myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])

// function myFunction(arr) {
//     return arr.sort()
// }
// console.log(a)
// console.log(b)


//13. Return the longest string from an array of strings (Mengembalikan string terpanjang dari array string)
// let a = myFunction(['help', 'me'])
// let b = myFunction(['I', 'need', 'candy'])

// function myFunction(arr) {
//     return arr.reduce((a, b) => a.length <= b.length ? b : a)
// }
// console.log(a)
// console.log(b)


//14. Check if all array elements are equal (Periksa apakah semua elemen array sama)
// let a = myFunction([true, true, true, true])
// let b = myFunction(['test', 'test', 'test'])
// let c = myFunction([1,1,1,2])
// let d = myFunction(['10',10,10,10])

// function myFunction(arr) {
//     return new Set(arr).size === 1
// }
// console.log(a, b, c, d)


//15. Merge an arbitrary number of arrays (Gabungkan sejumlah array yang berubah-ubah)
// let a = myFunction([1, 2, 3], [4, 5, 6])
// let b = myFunction(['a', 'b', 'c'], [4, 5, 6])
// let c = myFunction([true, true], [1, 2], ['a', 'b'])

// function myFunction(...arrays) {
//     return arrays.flat()
// }
// console.log(a, b, c)


//16. Sort array by object property (Urutkan array berdasarkan properti b dalam urutan menaik. Kembalikan array yang diurutkan)
// let a = myFunction([{a:1,b:2},{a:5,b:4}])
// let b = myFunction([{a:2,b:10},{a:5,b:4}])
// let c = myFunction([{a:1,b:7},{a:2,b:1}])

// function myFunction(arr) {
//     return arr.sort((a, b) => a.b - b.b)
// }
// console.log(a)
// console.log(b)
// console.log(c)


//17. Merge two arrays with duplicate values (Gabungkan dua array dengan nilai duplikat)
//Gabungkan kedua array dan hapus nilai duplikat. Urutkan hasil penggabungan dalam urutan menaik.
let a = myFunction([1, 2, 3], [3, 4, 5])
let b = myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])


function myFunction(a, b) {
    // // Gabungkan kedua array menggunakan spread operator
    // const mergedArray = [...a, ...b];
    
    // // Hapus nilai duplikat menggunakan Set dan kemudian konversi kembali ke array
    // const uniqueArray = [...new Set(mergedArray)];
    
    // // Urutkan hasil penggabungan dalam urutan menaik
    // const sortedArray = uniqueArray.sort((a, b) => a - b);
    
    // return sortedArray;
    return [...new Set([...a, ...b])].sort((x, y) => x - y);
}
console.log(a)
console.log(b)