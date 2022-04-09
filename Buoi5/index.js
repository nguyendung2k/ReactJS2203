const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

number.forEach((e, k, arr) => {
    // e la gia tri phan tu
    // k key(index) cua phan tu
    // arr mang ban dau

    // console.log(`value ${e} index ${k}`)
})

for (const i of number) {
    // console.log(`value ${i}`)
}

const lengthArray = number.length;
// for (let i = 0; i < lengthArray; i++) {
//     console.log(`value ${number[i]}`)
// }

// number.shift();
// console.log(number.shift())


// object literal
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    starts: function () {
        console.log(this); //tra ve 1 object
        return this.firstName;
    },
    stop: () => {
        console.log(this); // khong dinh nghia duoc this
        return this.lastName;
    }
};

// console.log(person.starts())

let students = [
    {
        id: 1,
        name: "Nam",
        address: "Ha Noi"
    },
    {
        id: 2,
        name: "Son",
        address: "TPHCM"
    }
]

const data = students.map((item, index) =>
    `(<tr class = js-${index}>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.address}</td>
    </tr>)`
)

// console.log(data)





