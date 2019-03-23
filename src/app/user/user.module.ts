import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { USER_ROUTES } from './user.routing';
import { ProfileComponent } from './profile/profile.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ResetComponent } from './reset/reset.component';

@NgModule({
    declarations: [
        UserComponent,
        ProfileComponent,
        AchievementsComponent,
        ResetComponent
    ],
    imports: [
        CoreModule,
        SharedModule,
        RouterModule.forChild(USER_ROUTES)
    ],
    exports: [
        UserComponent
    ]
})
export class UserModule { }