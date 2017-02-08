import { TestBed, inject } from '@angular/core/testing';
import { Base } from '../firebase-api-2.0/base';
import * as firebase from 'firebase';
// import { FirebaseApiModule } from './firebase-api-module';

const firebase_config = {
    apiKey: "AIzaSyCV0ovi7fQaOmr8HuIdcf9AI4yEgElkEag",
    authDomain: "aonic-d1606.firebaseapp.com",
    databaseURL: "https://aonic-d1606.firebaseio.com",
    storageBucket: "aonic-d1606.appspot.com",
    messagingSenderId: "329419405941"
};

firebase.initializeApp( firebase_config );

let base: Base = new Base();

describe('FirebaseAPI Base Test', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [Base]
        });
        
    });
    
    it('should check service if exist', () => {
        expect(base).toBe(base, 'Expected Base Service');
    });


    it('should create the data', () => {
        let key = "123456789"
        let data = {
            name: "user01",
            password: "user01"
        } 

        base.create( key, data, res => {
            // expect(res).toContain(data, "response must have a return data");
            // expect(res).toContain(data.name, "expected created name");
            expect(res).not.toBeNull("must failed! response has a value");
            console.log(res);
            expect(res).toEqual("user02", "expected must be user01");
        })
    });
});