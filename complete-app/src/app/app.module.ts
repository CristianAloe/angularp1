import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { InfoDinamicoComponent } from './info-dinamico/info-dinamico.component';
import { InfoServerComponent } from './info-server/info-server.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InfoDinamicoComponent,
    InfoServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
