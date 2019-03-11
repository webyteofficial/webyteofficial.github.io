import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  {path : '', redirectTo : '/home', pathMatch:'full'},
  {path : 'home', component:HomeComponent},
  {path : 'registration', component:RegistrationComponent},
  // {path : 'contact', component: ContactComponent},
  {path : 'about', component: AboutComponent},
  {path : 'events', component: EventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling : 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
