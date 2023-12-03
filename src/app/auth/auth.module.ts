import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './auth.page';

import { HomePageRoutingModule } from './auth-routing.module';
import { ButtonComponent } from '../shared/button/button.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from '../shared/input/input.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage,LoginComponent,ButtonComponent,InputComponent]
})
export class HomePageModule {}
