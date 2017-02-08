import { TestBed, inject } from '@angular/core/testing';
import { Base } from '../firebase-api-2.0/base';
import * as firebase from 'firebase';
// import { FirebaseApiModule } from './firebase-api-module';

const firebase_config = {
    apiKey: "AIzaSyBnvok5OR77tFUl1yk0-ZeyeVkYgMWGrcE",
    authDomain: "english-588f2.firebaseapp.com",
    databaseURL: "https://english-588f2.firebaseio.com",
    storageBucket: "english-588f2.appspot.com",
    messagingSenderId: "663067398311"
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
            expect(res).toContain(data);
        })
    });
});