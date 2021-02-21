"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const body = this.body;
        try {
        const { id, pw } = await UserStorage.getUserInfo(body.id);

        if (id){
            if (id === body.id && pw === body.pw) {
                return { success: true };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다." };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다." };
    } catch (err) {
        return { success: false, msg: err };
    }
    }

    async register() {
        const body = this.body;
        try{
        const response = await UserStorage.save(body);
        return response;

        } catch (err) {
            return { success: false, msg: err };
        }
    }    

}

module.exports = User;