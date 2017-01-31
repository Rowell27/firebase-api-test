import { TestBed, async } from '@angular/core/testing';
import { Base } from '../firebase-api-2.0/base';

describe('FirebaseAPI BaseServices', () => {
    beforeEach(() => {
        
        TestBed.configureTestingModule({
            imports: [ ],
            declarations: [
                Base
            ],
            providers: [
                Base
            ]
        })
    });
    
    // it('should create the app', async(() => {
    //     const fixture = TestBed.createComponent(Base);
    //     const base = fixture.debugElement.componentInstance;
    //     expect(base).toBeTruthy();
    // }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(Base);
        const base = fixture.debugElement.componentInstance;
        expect(base).toBeTruthy();
    }));
});