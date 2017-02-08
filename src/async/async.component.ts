import { Component, NgZone } from '@angular/core';
import { AsyncService } from './async.service';

@Component({
    selector: 'async-page',
    template: '<h1>Welcome, {{ user }}!</h1>'
})

export class AsyncComponent {

    user = "Krisha"
    constructor( private asyncService: AsyncService, private ngZone: NgZone ) {
        this.getUser()
    }

    renderPage() {
        this.ngZone.run(() => {
        });
    }

    getUser() {
        this.asyncService.getUsersData()
            .then( data => {
                console.log( "This user: ", this.user );
                this.user = data;
                this.renderPage();
                console.log( "This user: ", this.user );
            })  
    }

}