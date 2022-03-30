import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TdFormComponent } from './components/td-form/td-form.component';
import { MdFormComponent } from './components/md-form/md-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TdFormComponent,
    MdFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
