import { Injectable } from '@angular/core';

@Injectable()
export class AsyncService {

    constructor() {}

    users = ['Apple', 'Cherry']

    getUsers(){
        return new Promise<string>((resolve, reject) => {
        resolve(this.users[0]);
        });
    }
}