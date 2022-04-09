function getUsers(callback) {
    if (typeof callback !== 'function') {
        return false;
    }
    // let users = [];

    setTimeout(() => {
        // users = [
        //     {
        //         id: 1,
        //         name: 'John',
        //         email: 'john@example.com'
        //     },
        //     {
        //         id: 2,
        //         name: 'Son',
        //         email: 'son@example.com'
        //     }
        // ]
        callback([
            {
                id: 1,
                name: 'John',
                email: 'john@example.com'
            },
            {
                id: 2,
                name: 'Son',
                email: 'son@example.com'
            }
        ])

    }, 1000);
    // return users; //return tra ve ket qua cho ham, thoat khoai ham
}

function findUsersById(id, callback) {
    // const users = getUsers();
    // const user = users.find(user => user.id === id);
    // return user;


    getUsers((users) => {
        // tim user
        const user = users.find(user => user.id === id);

        callback(user);
    })

}

console.log(findUsersById(1, console.log))