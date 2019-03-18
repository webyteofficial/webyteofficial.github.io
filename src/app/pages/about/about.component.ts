import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    public team = [];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.team = this.dataService.getTeam();
    }

}
