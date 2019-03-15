import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SuccessComponent } from './success/success.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistrationComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'registration', component: RegistrationComponent },
      // { path : 'success' , component : SuccessComponent},
    ])
  ]
})
export class RegistrationModule { }
