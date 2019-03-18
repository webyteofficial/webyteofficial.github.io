import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public getTeam = () => this.team;
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

    private team = [
        {
            name: "Murtaza Nazir",
            designation: "Ex-President/Co-Founder",
            type: 'Prominence',
            socials: [
                { media: 'facebook', url: 'https://facebook.com/' },
                { media: 'instagram', url: 'https://instagram.com/' },
                { media: 'twitter', url: 'https://twitter.com/' },
                { media: 'github', url: 'https://github.com/' },
            ]
        },
        {
            name: "Wajid Manzoor",
            designation: "Co-Founder",
            type: 'Prominence',
            socials: [
                { media: 'facebook', url: 'https://facebook.com/' },
                { media: 'instagram', url: 'https://instagram.com/' },
                { media: 'twitter', url: 'https://twitter.com/' },
                { media: 'github', url: 'https://github.com/' },
            ]
        },
        {
            name: "Md. Mobshshir Nayeem",
            designation: "President",
            type: 'Prominence',
            socials: [
                { media: 'facebook', url: 'https://facebook.com/' },
                { media: 'instagram', url: 'https://instagram.com/' },
                { media: 'twitter', url: 'https://twitter.com/' },
                { media: 'github', url: 'https://github.com/' },
            ]
        },
        {
            name: "Ritesh Ganjewala",
            designation: "Web Development Head",
            type: 'Prime',
            socials: [
                { media: 'facebook', url: 'https://facebook.com/invinciblezeal' },
                { media: 'instagram', url: 'https://instagram.com/_ganjewala_' },
                { media: 'twitter', url: 'https://twitter.com/_ganjewala_' },
                { media: 'github', url: 'https://github.com/invinciblezeal' },
            ]
        },
        {
            name: "Abhishek Rathore",
            designation: "Web Developer",
            type: 'Prime',
            socials: [
                { media: 'facebook', url: 'https://facebook.com/' },
                { media: 'instagram', url: 'https://instagram.com/' },
                { media: 'twitter', url: 'https://twitter.com/' },
                { media: 'github', url: 'https://github.com/' },
            ]
        },
        {
            name: "Priyanshi Yadav",
            designation: "Embedded/IOT",
            type: 'Prime',
            socials: [
                { media: 'facebook', url: 'https://facebook.com/' },
                { media: 'instagram', url: 'https://instagram.com/' },
                { media: 'twitter', url: 'https://twitter.com/' },
                { media: 'github', url: 'https://github.com/' },
            ]
        },
    ]
}