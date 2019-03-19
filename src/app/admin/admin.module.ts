import { AuthGuard } from './../shared/guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { GetEventsComponent } from './get-events/get-events.component';
import { EventComponent } from './event/event.component';

@NgModule({
    declarations: [
        AdminLoginComponent,
        AdminUsersComponent,
        AdminDashboardComponent,
        CreateEventComponent,
        GetEventsComponent,
        EventComponent
    ],
    imports: [
        CoreModule,
        RouterModule.forChild([
            { path: '', redirectTo: 'login' },
            { path: 'login', component: AdminLoginComponent },
            { path: 'users', component: AdminUsersComponent, canActivate: [AuthGuard] },
            { path: 'dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
            { path: 'create-event', component: CreateEventComponent, canActivate: [AuthGuard] },
            { path: 'events', component: GetEventsComponent, canActivate: [AuthGuard] },
            { path: 'events/:id', component: EventComponent, canActivate: [AuthGuard] },
        ])
    ]
})
export class AdminModule { }
