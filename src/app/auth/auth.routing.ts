import { Routes } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { SuccessComponent } from "./success/success.component";

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        children: [
            { path: 'register', component: RegisterComponent },
            { path: 'success', component: SuccessComponent },
        ]
    }
]