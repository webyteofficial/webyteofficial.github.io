import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EventsComponent } from './pages/events/events.component';
import { VerifyComponent } from './pages/verify/verify.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'events', component: EventsComponent },
    { path: 'users/verify/:token', component: VerifyComponent },
    { path : 'users', loadChildren : './user/user.module#UserModule'},
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
