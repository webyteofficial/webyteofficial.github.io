import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from './../../shared/interfaces/user';

declare var TweenMax;

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    @ViewChild('overlay') overlay: ElementRef;

    displayDuplicate: boolean;
    public data: User = {
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        enrollment: undefined,
        password: undefined,
        gender: "Male",
        phone: undefined,
    }

    constructor(private userService: UserService, private router: Router) { }

    register(e: any) {
        this.userService.register(this.data).subscribe(data => {
            console.log(data);
            this.open()
            if (data && data.body['email'] == this.data.email) {
                this.open();
            }
            else {
                this.displayDuplicate = true;
            }
        })
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
