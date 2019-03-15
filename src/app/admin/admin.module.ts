import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateEventComponent } from './create-event/create-event.component';

@NgModule({
    declarations: [
        AdminLoginComponent,
        AdminUsersComponent,
        AdminDashboardComponent,
        CreateEventComponent
    ],
    imports: [
        CoreModule,
        RouterModule.forChild([
            { path: 'login', component: AdminLoginComponent },
            { path: 'users', component: AdminUsersComponent },
            { path: 'dashboard', component: AdminDashboardComponent },
            { path: 'create-event', component: CreateEventComponent },
        ])
    ]
})
export class AdminModule { }
