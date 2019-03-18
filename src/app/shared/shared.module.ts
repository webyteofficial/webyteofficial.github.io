import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services/user.service';
import { TeamFilterPipe } from './pipes/team-filter.pipe';

@NgModule({
    declarations: [TeamFilterPipe],
    imports: [
        CommonModule
    ],
    providers: [
        UserService
    ],
    exports: [TeamFilterPipe]
})
export class SharedModule { }
