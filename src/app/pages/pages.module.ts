import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { VerifyComponent } from './verify/verify.component';

@NgModule({
    declarations: [
        AboutComponent,
        ContactComponent,
        EventsComponent,
        HomeComponent,
        VerifyComponent,
    ],
    imports: [
        CoreModule,
        SharedModule,
    ],
    exports: [
        AboutComponent,
        ContactComponent,
        EventsComponent,
        HomeComponent,
    ]
})
export class PagesModule { }