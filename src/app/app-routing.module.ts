import { AboutComponent } from './about/about.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HomeComponent } from './home/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { EventsComponent } from './events/events.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'registration', component: RegistrationComponent },
    // {path : 'contact', component: ContactComponent},
    { path: 'about', component: AboutComponent },
    { path: 'events', component: EventsComponent },
    { path : 'admin/login', component : AdminLoginComponent},
    { path : 'admin/users' , component : AdminUsersComponent},
    { path: '**', redirectTo: 'home' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
