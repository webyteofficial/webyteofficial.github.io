import { Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { AchievementsComponent } from './achievements/achievements.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetComponent } from './reset/reset.component';

export const USER_ROUTES: Routes = [
     {
        path: 'me',
        component : UserComponent,
        children : [
            { path : '', redirectTo : 'profile', pathMatch:'full'},
            { path : 'profile', component:ProfileComponent},
            { path : 'achievements', component: AchievementsComponent },
            { path : 'reset', component: ResetComponent},
        ]
    },
]