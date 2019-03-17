import { Router } from '@angular/router';
import { AdminService } from '../../shared/services/admin.service';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

interface User {
    firstname: string,
    lastname: string,
    phone: string,
    email: string,
    enrollment: string,
    gender: string
}

@Component({
    selector: 'app-admin-users',
    templateUrl: './admin-users.component.html',
    styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent {
    data = [
        {
            email: 'abhishekrathore246@gmail.com', enrollment: 'enrollment',
            phone: '54564565',
            firstname: 'abhishek',
            lastname: 'rathore',
            gender: 'Male'
        }
    ]

    displayedColumns: string[] = ['enrollment', 'fullName', 'email', 'phone', 'gender', 'delete'];
    dataSource: MatTableDataSource<User>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private http: HttpClient, private adminService: AdminService, private router  : Router) {
        this.renderData();
    }

    renderData() {
        this.adminService.getUsers().subscribe((data : User[]) => {
            console.log(data);
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        },
        (err) => {
            console.log('Unauthorized ', err.status);
            if(err.status == 401){
                this.router.navigate(['events']);
            }
        })
    }


    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    delete(id){
        console.log(id);
        this.adminService.deleteUser(id).subscribe(data => {
            console.log(data);
            this.renderData();
        })
    }
}
