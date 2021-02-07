"use strict";

class UserStorage {
    static #users = {
        id: ["akokai", "akojin"],
        pw: ["1234", "qwer"],
        name: ["김정태","최형진"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
            // console.log(newUsers, field);
        }, {});
        console.log(newUsers);
        return newUsers;
        // return this.#users;
    }
}

module.exports = UserStorage;