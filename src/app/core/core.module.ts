import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

const MODULES = [
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
]

const COMPONENTS = [
    NavbarComponent
]

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...MODULES],
    exports: [...MODULES, ...COMPONENTS]
})
export class CoreModule { }
