import { EventComponent } from './event/event.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const PAGE_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'events', component: EventsComponent },
    { path: 'event', component: EventComponent },
]