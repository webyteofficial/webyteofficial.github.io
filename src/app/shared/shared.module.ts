import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminService } from './services/admin.service';
import { DataService } from './services/data.service';
import { UserService } from './services/user.service';
import { TeamFilterPipe } from './pipes/team-filter.pipe';

@NgModule({
    declarations: [TeamFilterPipe],
    imports: [
        CommonModule
    ],
    providers: [
        DataService,
        UserService,
        AdminService
    ],
    exports: [TeamFilterPipe]
})
export class SharedModule { }
