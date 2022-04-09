function getUsers(callback) {
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





getUsers()
    .then(user => new Promise((resolve, reject) => {
        resolve(user.find(user => user.id === id))
    }))
    .catch(err => console.log(err))