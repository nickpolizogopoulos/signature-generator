import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `

        <div class="container-fluid">
            <div class="row">

                <!-- SETTINGS -->
                <div class="col-block col-xl-6 mt-4">

                    <!-- WELCOME SECTION -->
                    <section class="boxSection">
                        <h2 class="mb-3 mainblue">Welcome to the Signature Generator Application!</h2>
                        <p class="lead">
                            In this Application you can create a brand new custom email signature fast and easy! 
                            Fill in the forms with your information and copy your favorite style!
                        </p>
                        <p class="lead">
                            <a class="inherit" routerLink="/about">Learn more</a> about this Application and the 
                            <a class="inherit" routerLink="/compatibility">Browser Compatibility.</a>
                        </p>

                    </section>

                    <!-- INFORMATION INPUT FIELDS -->
                    <p *ngIf="!informationWindow" (click)="panelClose('information')" class="lead cursor-pointer expand-section">+ Your information</p>
                    <section *ngIf="informationWindow" class="boxSection">

                        <div class="row d-flex mb-4">
                            <div class="col-9">
                                <h4>Enter your information</h4>
                            </div>
                            <div class="col d-flex flex-row-reverse">
                                <button (click)="panelClose('information')" type="button" class="btn-close shadow-none mt-1"></button>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xl-6">
                                <input (input)="onUpdateName($event)" type="text" class="form-control" placeholder="Name">
                                <input (input)="onUpdateSurname($event)"  type="text" class="form-control" placeholder="Surname">
                                <input (input)="onUpdateTitle($event)" type="text" class="form-control" placeholder="Title">
                                <input (input)="onUpdateLogoUrl($event)" type="text" class="form-control" placeholder="{{withoutLogo ? '-' : 'Logo url'}}" [disabled]="withoutLogo">
                            </div>
                            <div class="col-xl-6">
                                <input (input)="onUpdatePhone($event)" type="text" class="form-control" placeholder="Phone">
                                <input (input)="onUpdateEmail($event)" type="text" class="form-control" placeholder="Email">
                                <input (input)="onUpdateLocation($event)" type="text" class="form-control" placeholder="Location">
                                <div class="form-check noselect">
                                    <input [(ngModel)]="withoutLogo" class="form-check-input" type="checkbox" id="noLogoCheck">
                                    <label class="form-check-label" for="noLogoCheck">Without logo</label>
                                </div>
                            </div>
                        </div>
                        <p *ngIf="withoutLogo" class="mt-3 text-muted fst-italic">
                            <span class="lead text-danger">*</span>
                            Styles 1. Basic and 2. Vertical, are the same without the logo.
                        </p>
                    </section>

                    <!-- SOCIAL MEDIA -->
                    <p *ngIf="!socialMediaWindow" (click)="panelClose('socialMedia')" class="lead cursor-pointer expand-section">+ Social Media</p>
                    <section *ngIf="socialMediaWindow" class="boxSection">

                        <div class="row d-flex mb-4">
                            <div class="col-9">
                                <h4>Add your social media</h4>
                            </div>
                            <div class="col d-flex flex-row-reverse">
                                <button (click)="panelClose('socialMedia')" type="button" class="btn-close shadow-none mt-1"></button>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-5 col-md-3">
                                <div class="form-check">
                                    <input [(ngModel)]="website" class="form-check-input" type="checkbox" id="website">
                                    <label class="noselect" for="website">Website</label>
                                </div>
                            </div>
                            <div class="col-5 col-md-3">
                                <div class="form-check">
                                    <input [(ngModel)]="facebook" class="form-check-input" type="checkbox" id="facebook">
                                    <label class="noselect" for="facebook">Facebook</label>
                                </div>
                            </div>
                            <div class="col-5 col-md-3">
                                <div class="form-check">
                                    <input [(ngModel)]="instagram" class="form-check-input" type="checkbox" id="instagram">
                                    <label class="noselect" for="instagram">Instagram</label>
                                </div>
                            </div>
                            <div class="col-5 col-md-3">
                                <div class="form-check">
                                    <input [(ngModel)]="linkedin" class="form-check-input" type="checkbox" id="linkedin">
                                    <label class="noselect" for="linkedin">LinkedIn</label>
                                </div>
                            </div>
                            <div class="col-5 col-md-3">
                                <div class="form-check">
                                    <input  [(ngModel)]="github" class="form-check-input" type="checkbox" id="github">
                                    <label class="noselect" for="github">GitHub</label>
                                </div>
                            </div>
                            <div class="col-5 col-md-3">
                                <div class="form-check">
                                    <input  [(ngModel)]="twitter" class="form-check-input" type="checkbox" id="twitter">
                                    <label class="noselect" for="twitter">Twitter</label>
                                </div>
                            </div>
                            <div class="col-5 col-md-3">
                                <div class="form-check">
                                    <input  [(ngModel)]="reddit" class="form-check-input" type="checkbox" id="reddit">
                                    <label class="noselect" for="reddit">Reddit</label>
                                </div>
                            </div>
                            <div class="col-5 col-md-3">
                                <div class="form-check">
                                    <input  [(ngModel)]="threads" class="form-check-input" type="checkbox" id="threads">
                                    <label class="noselect" for="threads">Threads</label>
                                </div>
                            </div>
                            <div class="col-5 col-md-3">
                                <div class="form-check">
                                    <input  [(ngModel)]="linktree" class="form-check-input" type="checkbox" id="linktree">
                                    <label class="noselect" for="linktree">Linktree</label>
                                </div>
                            </div>
                            <div class="col-5 col-md-3">
                                <div class="form-check">
                                    <label (click)="checkAllSocial()" class="noselect"><u>Check all</u></label>
                                </div>
                            </div>
                            <div class="col-5 col-md-3">
                                <div class="form-check">
                                    <label (click)="uncheckAllSocial()" class="noselect"><u>Uncheck all</u></label>
                                </div>
                            </div>
                        </div>

                        <div *ngIf="this.website || this.facebook || this.instagram || this.linkedin || this.github || this.twitter || this.reddit || this.threads || this.linktree" class="row mt-4">

                            <p class="lead">Paste your social media links below</p>
                            <small>[ If you want to write the links manually, <u>make sure you include "https://" infront of them</u> - e.g. <strong>https://</strong>google.com or <strong>https://</strong>www.google.com ]</small>

                            <div class="row mt-3">
                                <div class="col-sm-8">
                                    <input *ngIf="website" [(ngModel)]="websiteLink" type="text" class="form-control" placeholder="Website">
                                    <input *ngIf="facebook" [(ngModel)]="facebookLink" type="text" class="form-control" placeholder="Facebook">
                                    <input *ngIf="instagram" [(ngModel)]="instagramLink" type="text" class="form-control" placeholder="Instagram">
                                    <input *ngIf="linkedin" [(ngModel)]="linkedinLink" type="text" class="form-control" placeholder="LinkedIn">
                                    <input *ngIf="github" [(ngModel)]="githubLink" type="text" class="form-control" placeholder="GitHub">
                                    <input *ngIf="twitter" [(ngModel)]="twitterLink" type="text" class="form-control" placeholder="Twitter">
                                    <input *ngIf="reddit" [(ngModel)]="redditLink" type="text" class="form-control" placeholder="Reddit">
                                    <input *ngIf="threads" [(ngModel)]="threadsLink" type="text" class="form-control" placeholder="Threads">
                                    <input *ngIf="linktree" [(ngModel)]="linktreeLink" type="text" class="form-control" placeholder="Linktree">
                                </div>
                            </div>
                        </div>

                    </section>

                    <!-- SIGNATURE PREFERENCES -->
                    <p *ngIf="!preferencesWindow" (click)="panelClose('preferences')" class="lead cursor-pointer expand-section">+ Signature Preferences </p>
                    <section *ngIf="preferencesWindow" class="boxSection">

                        <div class="row d-flex mb-4">
                            <div class="col-9">
                                <h4>Signature Preferences</h4>
                            </div>
                            <div class="col d-flex flex-row-reverse">
                                <button (click)="panelClose('preferences')" type="button" class="btn-close shadow-none mt-1"></button>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-xl-4">
                                <div class="form-check">
                                    <input [(ngModel)]="boldName" class="form-check-input" type="checkbox" id="boldName">
                                    <label class="noselect" for="boldName"><strong>Bold</strong> Name & Surname</label>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="form-check">
                                    <input [(ngModel)]="underlineName" class="form-check-input" type="checkbox" id="underlineName">
                                    <label class="noselect" for="underlineName"><u>Underline</u> Name & Surname</label>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="form-check">
                                    <input [(ngModel)]="capitaliseNameSurname" class="form-check-input" type="checkbox" id="capitaliseNameSurname">
                                    <label class="noselect" for="capitaliseNameSurname">Capitalise Name & Surname</label>
                                </div>
                            </div>
                        </div>    

                        <div class="row">
                            <div class="col-xl-4">
                                <div class="form-check">
                                        <input [(ngModel)]="boldTitle" class="form-check-input" type="checkbox" id="boldTitle">
                                        <label class="noselect" for="boldTitle"><strong>Bold</strong> Title</label>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="form-check">
                                    <input [(ngModel)]="underlineTitle" class="form-check-input" type="checkbox" id="underlineTitle">
                                    <label class="noselect" for="underlineTitle"><u>Underline</u> Title</label>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="form-check">
                                    <input [(ngModel)]="capitaliseTitle" class="form-check-input" type="checkbox" id="capitaliseTitle">
                                    <label class="noselect" for="capitaliseTitle">Capitalise Title</label>
                                </div>
                            </div>
                        </div>
                            
                        <div class="row mb-5">
                            <div class="col-xl-3">
                                <div class="form-check">
                                    <input [(ngModel)]="lineSeparator" class="form-check-input" type="checkbox" id="line">
                                    <label class="noselect" for="line">Line Separator</label>
                                </div>
                            </div>
                        </div>
                        <h4 class="mt-3 mb-3">Space between the social media icons</h4>
                        <div class="col">
                            <input
                                [disabled]="!website && !facebook && !instagram && !linkedin && !github && !twitter && !reddit && !threads && !linktree" 
                                [(ngModel)]="socialIconSpace" type="range" class="form-range" min="4" max="15">
                        </div>
                        <p class="lead">{{socialIconSpace}} pixels</p>

                        <h4 class="mt-3 mb-3">Horizontal line separator width</h4>
                        <div class="col">
                            <input
                                [disabled]="!lineSeparator" 
                                [(ngModel)]="lineWidth" type="range" class="form-range" min="30" max="200">
                        </div>
                        <p class="lead">{{lineWidth}} pixels</p>

                    </section>

                    <!-- TYPOGRAPHY -->
                    <p *ngIf="!typographyWindow" (click)="panelClose('typography')" class="lead cursor-pointer expand-section">+ Typography</p>
                    <section *ngIf="typographyWindow" class="boxSection">

                        <div class="row d-flex mb-4">
                            <div class="col-9">
                                <h4>Typography</h4>
                            </div>
                            <div class="col d-flex flex-row-reverse">
                                <button (click)="panelClose('typography')" type="button" class="btn-close shadow-none mt-1"></button>
                            </div>
                        </div>

                        <p class="lead">Pick your favorite font style.</p>

                        <div class="row noselect">
                            <div class="col-block col-sm-6 col-md-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="fonts" id="helvetica">
                                    <label class="form-check-label lead helvetica" for="helvetica">Helvetica</label>
                                </div>
                            </div>
                            <div class="col-block col-sm-6 col-md-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="fonts" id="monospace">
                                    <label class="form-check-label lead monospace" for="monospace">Monospace</label>
                                </div>
                            </div>
                            <div class="col-block col-sm-6 col-md-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="fonts" id="didot">
                                    <label class="form-check-label lead didot" for="didot">Didot</label>
                                </div>
                            </div>
                            <div class="col-block col-sm-6 col-md-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="fonts" id="futura">
                                    <label class="form-check-label lead futura" for="futura">Futura</label>
                                </div>
                            </div>
                        </div>

                    </section>

                    <!-- COLOURS -->
                    <p *ngIf="!coloursWindow" (click)="panelClose('colours')" class="lead cursor-pointer expand-section">+ Colours</p>
                    <section *ngIf="coloursWindow" class="boxSection">

                        <div class="row d-flex mb-4">
                            <div class="col-9">
                                <h4>Colours</h4>
                            </div>
                            <div class="col d-flex flex-row-reverse">
                                <button (click)="panelClose('colours')" type="button" class="btn-close shadow-none mt-1"></button>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-xl-6 mb-4">
                                <!-- <div class="col-xl-9"> -->
                                    <!-- <h4 class="mb-3">Primary colour</h4> -->
                                    <label class="mb-2 lead" for="pickerA">Primary colour</label>
                                    <div><input class="mb-2" [(ngModel)]="textAColour" type="color" id="pickerA"></div>
                                    <p>{{textAColour}}</p>
                                    <label class="mb-2" for="colorA">Specify your color <span class="form-text ms-3">[ make sure you include the hashtag # symbol - e.g. #1e2f5a ]</span></label>
                                    <input class="form-control" id="colorA" [(ngModel)]="textAColour" type="text" placeholder="#000000">
                                <!-- </div> -->
                            </div>

                            <div class="col-xl-6 mb-3">
                                <!-- <div class="col-xl-9"> -->
                                    <!-- <h4 class="mb-3">Secondary colour</h4> -->
                                    <label class="mb-2 lead" for="pickerB">Secondary colour</label>
                                    <div><input class="mb-2" [(ngModel)]="textBColour" type="color" id="pickerB"></div>
                                    <p>{{textBColour}}</p>
                                    <label class="mb-2" for="colorB">Specify your color <span class="form-text ms-3">[ make sure you include the hashtag # symbol - e.g. #1e2f5a ]</span></label>
                                    <input class="form-control" id="colorB" [(ngModel)]="textBColour" type="text"placeholder="#000000">
                                <!-- </div> -->
                            </div>

                        </div>
                    </section>

                </div>

                <!-- SIGNATURES -->
                <div class="col-block col-xl-6 mt-4">

                    <section class="boxSection">
                        <h4 class="mb-4">Choose your favorite among these Signature Styles!</h4>

                        <div class="row mb-5">
                            <div class="col">
                                <p class="lead">1. Basic</p>
                                <app-first-style
                                    logoUrl="{{logoUrl}}"
                                    name="{{name}}"
                                    surname="{{surname}}"
                                    title="{{title}}"
                                    phone="{{phone}}"
                                    email="{{email}}"
                                    location="{{location}}"
                                    [website]="website"
                                    [facebook]="facebook"
                                    [instagram]="instagram"
                                    [linkedin]="linkedin"
                                    [github]="github"
                                    [twitter]="twitter"
                                    [reddit]="reddit"
                                    [threads]="threads"
                                    [linktree]="linktree"
                                    websiteLink="{{websiteLink}}"
                                    facebookLink="{{facebookLink}}"
                                    instagramLink="{{instagramLink}}"
                                    linkedinLink="{{linkedinLink}}"
                                    githubLink="{{githubLink}}"
                                    twitterLink="{{twitterLink}}"
                                    redditLink="{{redditLink}}"
                                    threadsLink="{{threadsLink}}"
                                    linktreeLink="{{linktreeLink}}"
                                    [boldName]="boldName"
                                    [boldTitle]="boldTitle"
                                    [underlineName]="underlineName"
                                    [underlineTitle]="underlineTitle"
                                    [lineSeparator]="lineSeparator"
                                    [textAColour]="textAColour"
                                    [textBColour]="textBColour"
                                    socialIconSpace={{socialIconSpace}}
                                    [lineWidth]="lineWidth"
                                    [capitaliseNameSurname]="capitaliseNameSurname"
                                    [capitaliseTitle]="capitaliseTitle"
                                    [nameSurnameFontSize]="nameSurnameFontSize"
                                    [titleFontSize]="titleFontSize"
                                    [informationFontSize]="informationFontSize"
                                    [withoutLogo]="withoutLogo"
                                ></app-first-style>
                            </div>
                        </div>
                        
                        <div class="row mb-5">
                            <div class="col">
                                <p class="lead">2. Vertical</p>
                                <app-second-style
                                    logoUrl="{{logoUrl}}"
                                    name="{{name}}"
                                    surname="{{surname}}"
                                    title="{{title}}"
                                    phone="{{phone}}"
                                    email="{{email}}"
                                    location="{{location}}"
                                    [website]="website"
                                    [facebook]="facebook"
                                    [instagram]="instagram"
                                    [linkedin]="linkedin"
                                    [github]="github"
                                    [twitter]="twitter"
                                    [reddit]="reddit"
                                    [threads]="threads"
                                    [linktree]="linktree"
                                    websiteLink="{{websiteLink}}"
                                    facebookLink="{{facebookLink}}"
                                    instagramLink="{{instagramLink}}"
                                    linkedinLink="{{linkedinLink}}"
                                    githubLink="{{githubLink}}"
                                    twitterLink="{{twitterLink}}"
                                    redditLink="{{redditLink}}"
                                    threadsLink="{{threadsLink}}"
                                    linktreeLink="{{linktreeLink}}"
                                    [boldName]="boldName"
                                    [boldTitle]="boldTitle"
                                    [underlineName]="underlineName"
                                    [underlineTitle]="underlineTitle"
                                    [lineSeparator]="lineSeparator"
                                    [textAColour]="textAColour"
                                    [textBColour]="textBColour"
                                    socialIconSpace={{socialIconSpace}}
                                    [lineWidth]="lineWidth"
                                    [capitaliseNameSurname]="capitaliseNameSurname"
                                    [capitaliseTitle]="capitaliseTitle"
                                    [nameSurnameFontSize]="nameSurnameFontSize"
                                    [titleFontSize]="titleFontSize"
                                    [informationFontSize]="informationFontSize"
                                    [withoutLogo]="withoutLogo"
                                ></app-second-style>
                            </div>
                        </div>

                        <div class="row mb-5">
                            <div class="col">
                                <p class="lead">3. Vertical Centered</p>
                                <app-third-style
                                    logoUrl="{{logoUrl}}"
                                    name="{{name}}"
                                    surname="{{surname}}"
                                    title="{{title}}"
                                    phone="{{phone}}"
                                    email="{{email}}"
                                    location="{{location}}"
                                    [website]="website"
                                    [facebook]="facebook"
                                    [instagram]="instagram"
                                    [linkedin]="linkedin"
                                    [github]="github"
                                    [twitter]="twitter"
                                    [reddit]="reddit"
                                    [threads]="threads"
                                    [linktree]="linktree"
                                    websiteLink="{{websiteLink}}"
                                    facebookLink="{{facebookLink}}"
                                    instagramLink="{{instagramLink}}"
                                    linkedinLink="{{linkedinLink}}"
                                    githubLink="{{githubLink}}"
                                    twitterLink="{{twitterLink}}"
                                    redditLink="{{redditLink}}"
                                    threadsLink="{{threadsLink}}"
                                    linktreeLink="{{linktreeLink}}"
                                    [boldName]="boldName"
                                    [boldTitle]="boldTitle"
                                    [underlineName]="underlineName"
                                    [underlineTitle]="underlineTitle"
                                    [lineSeparator]="lineSeparator"
                                    [textAColour]="textAColour"
                                    [textBColour]="textBColour"
                                    socialIconSpace={{socialIconSpace}}
                                    [lineWidth]="lineWidth"
                                    [capitaliseNameSurname]="capitaliseNameSurname"
                                    [capitaliseTitle]="capitaliseTitle"
                                    [nameSurnameFontSize]="nameSurnameFontSize"
                                    [titleFontSize]="titleFontSize"
                                    [informationFontSize]="informationFontSize"
                                    [withoutLogo]="withoutLogo"
                                ></app-third-style>
                            </div>
                        </div>

                        <div class="row mb-5">
                            <div class="col">
                                <p class="lead">4. Simple</p>
                                <app-fourth-style
                                    logoUrl="{{logoUrl}}"
                                    name="{{name}}"
                                    surname="{{surname}}"
                                    title="{{title}}"
                                    phone="{{phone}}"
                                    email="{{email}}"
                                    location="{{location}}"
                                    [website]="website"
                                    [facebook]="facebook"
                                    [instagram]="instagram"
                                    [linkedin]="linkedin"
                                    [github]="github"
                                    [twitter]="twitter"
                                    [reddit]="reddit"
                                    [threads]="threads"
                                    [linktree]="linktree"
                                    websiteLink="{{websiteLink}}"
                                    facebookLink="{{facebookLink}}"
                                    instagramLink="{{instagramLink}}"
                                    linkedinLink="{{linkedinLink}}"
                                    githubLink="{{githubLink}}"
                                    twitterLink="{{twitterLink}}"
                                    redditLink="{{redditLink}}"
                                    threadsLink="{{threadsLink}}"
                                    linktreeLink="{{linktreeLink}}"
                                    [boldName]="boldName"
                                    [boldTitle]="boldTitle"
                                    [underlineName]="underlineName"
                                    [underlineTitle]="underlineTitle"
                                    [lineSeparator]="lineSeparator"
                                    [textAColour]="textAColour"
                                    [textBColour]="textBColour"
                                    socialIconSpace={{socialIconSpace}}
                                    [capitaliseNameSurname]="capitaliseNameSurname"
                                    [capitaliseTitle]="capitaliseTitle"
                                    [nameSurnameFontSize]="nameSurnameFontSize"
                                    [titleFontSize]="titleFontSize"
                                    [informationFontSize]="informationFontSize"
                                    [withoutLogo]="withoutLogo"
                                ></app-fourth-style>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="lead">More styles are coming soon! </p>
                                <app-placeholder-signature></app-placeholder-signature>
                            </div>
                        </div>
                    </section>

                </div>
                
            </div>
        </div>

    `
})
export class HomeComponent {

    // ngOnInit() {
    //     this.checkAllSocial();
    //     this.lineSeparator = true;
    //     this.name = 'Nick';
    //     this.surname = 'Polizogopoulos';
    //     this.title = 'Front - End Software Developer';
    //     this.phone = '+30 698 235 1857';
    //     this.email = 'nick.polizogopoulos@gmail.com';
    //     this.location = 'Patras, Western Greece';
    //     this.logoUrl = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
    // }

    name:string = 'Name';
    surname:string = 'Surname';
    title:string = 'Position title';
    phone:string = '+00 0000 000 000';
    email:string = 'email@email.com';
    location:string = 'Street, City, Country';
    logoUrl:string = '../../assets/signature-generator-logo.png';
    withoutLogo:boolean = false;

    website:boolean = false;
    facebook:boolean = false;
    instagram:boolean = false;
    linkedin:boolean = false;
    github:boolean = false;
    twitter:boolean = false;
    reddit:boolean = false;
    threads:boolean = false;
    linktree:boolean = false;

    websiteLink?:string;
    facebookLink?:string;
    instagramLink?:string;
    linkedinLink?:string;
    githubLink?:string;
    twitterLink?:string;
    redditLink?:string;
    threadsLink?:string;
    linktreeLink?:string;

    boldName:boolean = false;
    boldTitle:boolean = false;
    underlineName:boolean = false;
    underlineTitle:boolean = false;
    capitaliseNameSurname:boolean = false;
    capitaliseTitle:boolean = false;

    textAColour:string = '#000000';
    textBColour:string = '#000000';
    socialIconSpace:string = '7';
    lineSeparator:boolean = true;
    lineWidth:number = 30;

    nameSurnameFontSize:number = 19;
    titleFontSize:number = 14;
    informationFontSize:number = 14;
    
    spinnerLoading:boolean = false;
    copyResponse:boolean = false;

    informationWindow:boolean = false;
    socialMediaWindow:boolean = false;
    preferencesWindow:boolean = false;
    typographyWindow:boolean = true;
    coloursWindow:boolean = false;

    onUpdateName( event:Event ):void {
        this.name = (<HTMLInputElement>event.target).value;
    }

    onUpdateSurname( event:Event ):void {
        this.surname = (<HTMLInputElement>event.target).value;
    }

    onUpdateTitle( event:Event ):void {
        this.title = (<HTMLInputElement>event.target).value;
    }

    onUpdateEmail( event:Event ):void {
        this.email = (<HTMLInputElement>event.target).value;
    }

    onUpdatePhone( event:Event ):void {
        this.phone = (<HTMLInputElement>event.target).value;
    }

    onUpdateLocation( event:Event ):void {
        this.location = (<HTMLInputElement>event.target).value;
    }

    onUpdateLogoUrl( event:Event ):void {
        this.logoUrl = (<HTMLInputElement>event.target).value;
    }

    uncheckAllSocial():void {
        this.website = false;
        this.facebook = false;
        this.instagram = false;
        this.linkedin = false;
        this.github = false;
        this.twitter = false;
        this.reddit = false;
        this.threads = false;
        this.linktree = false;
    }

    checkAllSocial():void {
        this.website = true;
        this.facebook = true;
        this.instagram = true;
        this.linkedin = true;
        this.github = true;
        this.twitter = true;
        this.reddit = true;
        this.threads = true;
        this.linktree = true;
    }
    
    panelClose( id:string ):void {
        switch(id) {
            case 'information': { 
                this.informationWindow = !this.informationWindow;
                break;
            } 
            case 'socialMedia': { 
                this.socialMediaWindow = !this.socialMediaWindow;
                break;
            } 
            case 'preferences': { 
                this.preferencesWindow = !this.preferencesWindow;
                break;
            }
            case 'colours': { 
                this.coloursWindow = !this.coloursWindow;
                break;
            }
            case 'typography': { 
                this.typographyWindow = !this.typographyWindow;
                break;
            }
        }
    }

}