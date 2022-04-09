// //ban chat JS la single thread , tai 1 thoi diem chi chay 1 cau lenh
// console.log("A");

// setTimeout(function () { //Ham xu ly bat dong bo
//     console.log("B")
// }, 1000)

// console.log("C")


function myFilter(numbers, fn) {
    if (typeof fn !== "function") {
        return false;
    }

    let results = [];

    for (const number of numbers) {
        if (fn(number)) {
            results.push(number)
        }
    }
    return results;
}


function isOdd(n) {
    return n % 2 !== 0;
}

function isEven(n) {
    return n % 2 === 0;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(myFilter(a, isOdd))
console.log(myFilter(a, isEven))



