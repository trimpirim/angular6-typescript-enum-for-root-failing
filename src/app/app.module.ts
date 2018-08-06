import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TestModule} from './test.module';
import {FormsModule} from '@angular/forms';

export enum TestValuesEnum {
  TEST1 = 'TEST1',
  TEST2 = 'TEST2',
  TEST3 = 'TEST3'
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    TestModule.forRoot({
      content: Object.keys(TestValuesEnum).map((key: string) => TestValuesEnum[key])
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
