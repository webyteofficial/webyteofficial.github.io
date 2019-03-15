import { AdminService } from './../../admin.service';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

interface User {
    phone: string,
    email: string,
    firstname: string,
    lastname: string,
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

    displayedColumns: string[] = ['email', 'enrollment', 'firstname', 'phone', 'lastname', 'gender'];
    dataSource: MatTableDataSource<User>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private http: HttpClient, private adminService: AdminService) {
        this.renderData();
    }

    renderData() {
        // this.adminService.getUsers().subscribe((data : User[]) => {
        console.log(this.data);
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // })
    }


    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

}
