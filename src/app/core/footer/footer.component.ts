import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/shared/services/data.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    public socials: any[] = [];
    public date = new Date();
    constructor(private dataSerice: DataService) { }

    ngOnInit() {
        this.socials = this.dataSerice.getSocials();
    }

}
