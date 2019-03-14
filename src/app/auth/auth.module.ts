import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';

import { AUTH_ROUTES } from './auth.routing';
import { SuccessComponent } from './success/success.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [
        RegisterComponent,
        SuccessComponent,
    ],
    imports: [
        CoreModule,
        RouterModule.forChild(AUTH_ROUTES)
    ]
})
export class AuthModule { }
