import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AsyncComponent } from '../async/async.component';
import { AsyncService } from '../async/async.service';

@NgModule({
  declarations: [
    AppComponent,
    AsyncComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AsyncService],
  bootstrap: [AppComponent]
})
export class AppModule { }
