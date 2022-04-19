function getUsers() {
    return new Promise((resolve, reject) => { // new khoi tao doi tuong
        let check = true;

        setTimeout(() => { //tien trinh xu ly bat dong bo
            if (check) {
                resolve([
                    {
                        id: 1,
                        name: 'John'
                    },
                    {
                        id: 2,
                        name: 'Son'
                    }
                ])
            }
            else {
                reject('Service false')
            }
        }, 1000)
    })
}


// function getUserById() {
//     return new Promise(function(resolve, reject) {
//         resolve()
//     })
// }



getUsers()
    .then(user => console.log(user))
    .catch(err => console.log(err))