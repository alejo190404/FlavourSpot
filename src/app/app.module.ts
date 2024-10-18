import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Landing/landing-page/landing-page.component';
import { RegisterComponent } from './Landing/register/register.component';
import { RecetasComponent } from './Main/recetas/recetas.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RegisterComponent,
    RecetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
