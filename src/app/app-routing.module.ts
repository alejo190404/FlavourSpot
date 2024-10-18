import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Landing/landing-page/landing-page.component';
import { RegisterComponent } from './Landing/register/register.component';
import { RecetasComponent } from './Main/recetas/recetas.component';

const routes: Routes = [
  {path: 'home', component: LandingPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: RecetasComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
