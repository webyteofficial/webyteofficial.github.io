import { AdminService } from './../../admin.service';
import { Component, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';

interface User {
  name : string,
  email : string,
  firstname : string,
  lastname : string,
  enrollment : string,
}

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent  {
  itemsPerPage = 25;
  displayedColumns: string[] = ['email', 'enrollment', '', 'low', 'high', 'volume', 'date'];
  page : number = 1;

  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http : HttpClient, private adminService : AdminService) {
    this.renderData();
  }

  renderData(){
    console.log(this.itemsPerPage);
    this.adminService.getUsers().subscribe((data : User[]) => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      console.log(this.dataSource); 
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
