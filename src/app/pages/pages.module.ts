import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { PAGE_ROUTES } from './pages.routing';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        AboutComponent,
        ContactComponent,
        EventsComponent,
        HomeComponent,
    ],
    imports: [
        CoreModule,
        RouterModule.forChild(PAGE_ROUTES),
        SharedModule,
    ],
})
export class PagesModule { }
