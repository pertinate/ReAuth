import jwt from 'jsonwebtoken';
import { client } from '../connections/redis';

export default class User {
    user_id: number;
    username: string;
    email: string;
    created_on: Date;
    last_login: Date;
    token: string;
    token_expires: number;

    constructor(userInfo: {
        user_id: number;
        username: string;
        email: string;
        created_on: Date;
        last_login: Date;
        token?: string;
    }) {
        this.user_id = userInfo.user_id;
        this.username = userInfo.username;
        this.email = userInfo.email;
        this.created_on = userInfo.created_on;
        this.last_login = userInfo.last_login;
        this.token = userInfo.token;
    }

    login = (password: string) => {

    };

    logout = () => {

    };

    revokeToken = () => {

    };

    renewToken = () => {

    };

    createToken = () => {
        this.token = jwt.sign({
            date: (new Date(Date.now() + 1000 * 60 * 60 * 24))
        }, 'my secret jwt', { expiresIn: '24h' });
    };

    toJSON() {
        return JSON.stringify({
            user_id: this.user_id,
            username: this.username,
            email: this.email,
            created_on: this.created_on,
            last_login: this.last_login,
            token: this.token,
        });
    }
}
