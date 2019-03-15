import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

declare var TweenMax;

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    @ViewChild('overlay') overlay: ElementRef;
    firstname: string;
    lastname: string;
    email: string;
    enrollment: string;
    password: string;
    displayDuplicate: boolean;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
    }

    register() {
        var body = {
            firstName: this.firstname,
            lastName: this.lastname,
            email: this.email,
            enrollment: this.enrollment,
            password: this.password,
            phone: 8383838383,
            gender: 'Male'
        }

        this.userService.register(body).subscribe(data => {
            console.log('into the subscription');
            console.log(data);
            this.open()
            if (data && data['email'] == this.email) {
                this.open();
            }
            else {
                this.displayDuplicate = true;
            }
        },
            error => console.log("error occured"))
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
