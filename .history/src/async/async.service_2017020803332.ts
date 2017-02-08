import { Injectable } from '@angular/core';

@Injectable()
export class AsyncService {

    constructor() {}

    users = ['Apple', 'Cherry']

    getUsersData(){
        return new Promise<string>((resolve, reject) => {
            resolve(this.users[0]);
        });
    }
}