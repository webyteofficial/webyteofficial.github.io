import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NavbarComponent } from './navbar/navbar.component';

const MODULES = [
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
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
