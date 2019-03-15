import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
    declarations: [
        AdminLoginComponent,
        AdminUsersComponent,
    ],
    imports: [
        CoreModule,
        RouterModule.forChild([
            { path: 'login', component: AdminLoginComponent },
            { path: 'users', component: AdminUsersComponent },
        ])
    ]
})
export class AdminModule { }
