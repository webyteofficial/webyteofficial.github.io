import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public getSocials = () => this.socials;
    public getPages = () => this.pages;

    constructor() { }

    private pages = [
        { name: 'Home', path: ['/', 'home'] },
        { name: 'Events', path: ['/', 'events'] },
        { name: 'About', path: ['/', 'about'] },
        { name: 'Contact', path: ['/', 'contact'] },
        { name: 'Register', path: ['/', 'auth', 'register'] },
    ]

    private socials = [
        { media: 'youtube', url: 'https://www.youtube.com/channel/UClQ57Iza0JDCH8X2JFwNHLg' },
        { media: 'instagram', url: 'https://instagram.com/webyteofficial' },
        { media: 'facebook', url: 'https://facebook.com/webyteofficial' },
        { media: 'twitter', url: 'https://twitter.com/webyteofficial' },
    ]
}