// bài 1. Sử dụng vòng lặp, tính tổng giá trị các phần tử trong mảng.
//     Input: [0, 5, 4, 2, 8]
// Output: 19

let mang = [0, 5, 4, 2, 8];

function sumArray(mang) {
    let sum = 0;

    mang.forEach(function (value) {
        sum += value;
    })

    return sum;
}

console.log(sumArray(mang));


// bài 2. Sử dụng một mảng các đối tượng person(name, age) thành tổng hợp mảng các tên người.
//     Input: const person = [
//         { name: 'John', age: 24 },
//         { name: Pete, age: 25 },
//         { name: Mary', age: 28 }
// ]

// Output: ['John', 'Pete', 'Mary'].

const person = [
    { name: 'John', age: 24 },
    { name: 'Pete', age: 25 },
    { name: 'Mary', age: 28 }
]

let namePerson = person.map(function (e) {
    return e.name;
})

console.log(namePerson)


// bài 3. Sử dụng các mảng dữ liệu tên người để tổng hợp thành mảng tên người không trùng lặp.
//     Input: arr1 = ['John', 'Pete', 'Mary']
// arr2 = ['Mary', 'Henry', 'Harry']

// Output: ['John', 'Pete', 'Mary', 'Henry']

// Gợi ý: Có thể sử dụng spread trong mảng. [...arr] kết hợp với phương thức includes trong array method.

let arr1 = ['John', 'Pete', 'Mary'];
let arr2 = ['Mary', 'Henry', 'Harry'];

let arr3 = arr1.concat(arr2);

console.log([...(new Set(arr3))]);

