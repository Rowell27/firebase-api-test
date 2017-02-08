import { Component } from '@angular/core';
import { AsyncService } from './async.service';

@Component({
    selector: 'async-page',
    template: `
        <h1>Welcome! {{ user }}</h1>
    `
})

export class AsyncPage {

    user;
    constructor( private asyncService: AsyncService ) {
        this.getUser()
    }

    getUser() {
        this.asyncService.getUsersData()
            .then((data) => {
                this.user = data;
            })
    }

}