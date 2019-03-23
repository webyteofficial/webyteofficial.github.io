import { Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { ParticipationsComponent } from './participations/participations.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetComponent } from './reset/reset.component';

export const USER_ROUTES: Routes = [
    
     {
        path: 'me',
        component : UserComponent,
        children : [
            { path : 'profile', component:ProfileComponent},
            { path : 'achievements', component: AchievementsComponent },
            { path : 'profile', component: ParticipationsComponent},
            { path : 'reset', component: ResetComponent},
        ]

    },
    // {path: 'registration', component : RegisterComponent},
    // {path: 'success', component : SuccessComponent}
]