import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

declare var TweenMax;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
    @ViewChild('overlay') overlay: ElementRef;
    public isCollapsed = false;

    public pages: any[];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.pages = this.dataService.getPages();
    }

    ngAfterViewInit() {
        console.log(this.overlay);
    }

    open() {
        this.overlay.nativeElement.style.visibility = 'visible';
        TweenMax.to(this.overlay.nativeElement, 0.2, { display: 'flex', });
        TweenMax.to(this.overlay.nativeElement.children[1], 0.2, { scale: 1 });
    }

    close() {
        TweenMax.to(this.overlay.nativeElement.children[1], 0.15, { scale: 0 });
        TweenMax.to(this.overlay.nativeElement, 0.15, { display: 'none', });
    }
}
