import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public getPages = () => this.pages;

    constructor() { }

    private pages = [
        { name: 'Home', path: ['/', 'home'] },
        { name: 'Events', path: ['/', 'events'] },
        { name: 'About', path: ['/', 'about'] },
        { name: 'Contact', path: ['/', 'contact'] },
        { name: 'Register', path: ['/', 'auth', 'register'] },
    ]
}