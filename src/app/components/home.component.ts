import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `

        <div class="container-fluid">
            <div class="row">

                <!-- SETTINGS -->
                <section class="col-block col-xl-6 mt-4">

                    <!-- WELCOME -->
                    <section> 
                        <div class="boxSection">
                            <h2 class="mb-4 mainblue">Welcome to the Signature Generator Application!</h2>
                            <div class="ms-3">
                                <p class="lead">
                                    In this Application you can create a brand new custom email signature fast and easy! 
                                    Fill in the forms with your information and copy your favorite style!
                                </p>
                                <p class="lead">
                                    <a class="inherit" routerLink="/about">Learn more</a> about this Application and the 
                                    <a class="inherit" routerLink="/compatibility">Compatibility.</a>
                                </p>
                            </div>
                        </div>
                    </section>

                    <!-- INFORMATION -->
                    <section>
                        <app-expand-window
                            *ngIf="!informationWindow" text="Information"
                            (windowHandler)="onWindowHandle('information')"
                        ></app-expand-window>

                        <div *ngIf="informationWindow" class="boxSection">
                        
                            <app-collapse-window
                                title="Signature Information"
                                (windowHandler)="onWindowHandle('information')"
                            ></app-collapse-window>

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
                        </div>
                    </section>

                    <!-- SOCIAL MEDIA -->
                    <section>
                        <app-expand-window
                            *ngIf="!socialMediaWindow" text="Social Media"
                            (windowHandler)="onWindowHandle('socialMedia')"
                        ></app-expand-window>

                        <div *ngIf="socialMediaWindow" class="boxSection">

                            <app-collapse-window
                                title="Social Media"
                                (windowHandler)="onWindowHandle('socialMedia')"
                            ></app-collapse-window>

                            <p class="lead">1. Check the social media you wish to include in your signature</p>
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
                                <p class="lead">2. Paste your social media links below</p>
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

                        </div>
                    </section>

                    <!-- PREFERENCES -->
                    <section>
                        <app-expand-window
                            *ngIf="!preferencesWindow" text="Signature Preferences"
                            (windowHandler)="onWindowHandle('preferences')"
                        ></app-expand-window>

                        <div *ngIf="preferencesWindow" class="boxSection">

                            <app-collapse-window
                                title="Signature Preferences"
                                (windowHandler)="onWindowHandle('preferences')"
                            ></app-collapse-window>

                            <p *ngIf="!withoutLogo" class="lead mt-3 mb-3">1. Logo width</p>
                            <div *ngIf="!withoutLogo" class="col">
                                <input [disabled]="withoutLogo" [(ngModel)]="logoWidth"
                                        type="range" class="form-range" min="30" max="200">
                            </div>
                            <p *ngIf="!withoutLogo" class="mb-4">{{logoWidth}} pixels</p>

                            <p class="lead mt-3 mb-3"><span>{{withoutLogo ? '1' : '2'}}</span>. Horizontal line separator width</p>
                            <div class="col">
                                <input [disabled]="!lineSeparator" [(ngModel)]="lineWidth" 
                                        type="range" class="form-range" min="30" max="200">
                            </div>
                            <p class="mb-4">{{lineWidth}} pixels</p>
                            
                            <p class="lead mt-3 mb-3"><span>{{withoutLogo ? '2' : '3'}}</span>. Space between the social media icons</p>
                            <div class="col">
                                <input
                                    [disabled]="!website && !facebook && !instagram && !linkedin && !github && !twitter && !reddit && !threads && !linktree" 
                                    [(ngModel)]="socialIconSpace" type="range" class="form-range" min="4" max="15">
                            </div>
                            <p class="mb-4">{{socialIconSpace}} pixels</p>

                        </div>
                    </section>

                    <!-- TYPOGRAPHY -->
                    <section>
                        <app-expand-window
                            *ngIf="!typographyWindow" text="Typography"
                            (windowHandler)="onWindowHandle('typography')"
                        ></app-expand-window>

                        <div *ngIf="typographyWindow" class="boxSection">

                            <app-collapse-window
                                title="Typography"
                                (windowHandler)="onWindowHandle('typography')"
                            ></app-collapse-window>

                            <p class="lead">1. Decorate your signature.</p>

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
                                
                            <div class="row mb-4">
                                <div class="col-xl-3">
                                    <div class="form-check">
                                        <input [(ngModel)]="lineSeparator" class="form-check-input" type="checkbox" id="line">
                                        <label class="noselect" for="line">Line Separator</label>
                                    </div>
                                </div>
                            </div>

                            <p class="lead">2. Pick your favorite font style.</p>

                            <div class="row mb-4 noselect">
                                <div class="col-block col-sm-6 col-md-3">
                                    <div class="form-check lead">
                                        <input [(ngModel)]="fontFamily" [value]="'helvetica'" class="form-check-input" type="radio" name="fonts" id="helvetica">
                                        <label class="form-check-label helvetica" for="helvetica">Helvetica</label>
                                    </div>
                                </div>
                                <div class="col-block col-sm-6 col-md-3">
                                    <div class="form-check lead">
                                        <input [(ngModel)]="fontFamily" [value]="'monospace'" class="form-check-input" type="radio" name="fonts" id="monospace">
                                        <label class="form-check-label monospace" for="monospace">Monospace</label>
                                    </div>
                                </div>
                                <div class="col-block col-sm-6 col-md-3">
                                    <div class="form-check lead">
                                        <input [(ngModel)]="fontFamily" [value]="'didot'" class="form-check-input" type="radio" name="fonts" id="didot">
                                        <label class="form-check-label didot" for="didot">Didot</label>
                                    </div>
                                </div>
                                <div class="col-block col-sm-6 col-md-3">
                                    <div class="form-check lead">
                                        <input [(ngModel)]="fontFamily" [value]="'futura'" class="form-check-input" type="radio" name="fonts" id="futura">
                                        <label class="form-check-label futura" for="futura">Futura</label>
                                    </div>
                                </div>
                                <div class="col-block col-sm-6 col-md-3">
                                    <div class="form-check lead">
                                        <input [(ngModel)]="fontFamily" [value]="'copperplate'" class="form-check-input" type="radio" name="fonts" id="copperplate">
                                        <label class="form-check-label copperplate" for="copperplate">Copperplate</label>
                                    </div>
                                </div>
                            </div>

                            <p class="lead">3. Name & Surname font size.</p>
                            <div class="row mb-4">
                                <div class="col">
                                    <input [(ngModel)]="nameSurnameFontSize" type="range" class="form-range" min="15" max="25">
                                </div>
                                <p class="mb-4">{{nameSurnameFontSize}} pixels</p>
                            </div>

                            <p class="lead">4. Title font size.</p>
                            <div class="row mb-4">
                                <div class="col">
                                    <input [(ngModel)]="titleFontSize" type="range" class="form-range" min="9" max="20">
                                </div>
                                <p class="mb-4">{{titleFontSize}} pixels</p>
                            </div>

                            <p class="lead">5. Information font size.</p>
                            <div class="row mb-4">
                                <div class="col">
                                    <input [(ngModel)]="informationFontSize" type="range" class="form-range" min="9" max="20">
                                </div>
                                <p class="mb-4">{{informationFontSize}} pixels</p>
                            </div>

                        </div>
                    </section>

                    <!-- COLOURS -->
                    <section>
                        <app-expand-window
                            *ngIf="!coloursWindow" text="Colours"
                            (windowHandler)="onWindowHandle('colours')"
                        ></app-expand-window>

                        <div *ngIf="coloursWindow" class="boxSection">

                            <app-collapse-window
                                title="Colours"
                                (windowHandler)="onWindowHandle('colours')"
                            ></app-collapse-window>

                            <div class="row">
                                <div class="col-xl-6 mb-4">
                                    <label class="mb-2 lead" for="pickerA">Primary colour</label>
                                    <div><input class="mb-2" [(ngModel)]="textAColour" type="color" id="pickerA"></div>
                                    <p>{{textAColour}}</p>
                                    <label class="mb-2" for="colorA">Specify your color <span class="form-text ms-3">[ make sure you include the hashtag # symbol - e.g. #1e2f5a ]</span></label>
                                    <input class="form-control" id="colorA" [(ngModel)]="textAColour" type="text" placeholder="#000000">
                                </div>

                                <div class="col-xl-6 mb-3">
                                    <label class="mb-2 lead" for="pickerB">Secondary colour</label>
                                    <div><input class="mb-2" [(ngModel)]="textBColour" type="color" id="pickerB"></div>
                                    <p>{{textBColour}}</p>
                                    <label class="mb-2" for="colorB">Specify your color <span class="form-text ms-3">[ make sure you include the hashtag # symbol - e.g. #1e2f5a ]</span></label>
                                    <input class="form-control" id="colorB" [(ngModel)]="textBColour" type="text"placeholder="#000000">
                                </div>
                            </div>

                        </div>
                    </section>

                </section>

                <!-- SIGNATURES -->
                <section class="col-block col-xl-6 mt-4">

                    <div class="boxSection">
                        <h4>Choose your favorite among these Signature Styles!</h4>
                        <p class="mb-4">I'd love to <a class="inherit" href="">see</a> what you've created!</p>

                        <div class="row mb-5">
                            <div class="col">
                                <p class="lead">1. Basic</p>
                                <app-first-style
                                    name="{{name}}"
                                    surname="{{surname}}"
                                    title="{{title}}"
                                    phone="{{phone}}"
                                    email="{{email}}"
                                    location="{{location}}"
                                    logoUrl="{{logoUrl}}"
                                    [withoutLogo]="withoutLogo"

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

                                    [logoWidth]="logoWidth"
                                    [lineWidth]="lineWidth"
                                    socialIconSpace={{socialIconSpace}}

                                    [boldName]="boldName"
                                    [boldTitle]="boldTitle"
                                    [underlineName]="underlineName"
                                    [underlineTitle]="underlineTitle"
                                    [capitaliseNameSurname]="capitaliseNameSurname"
                                    [capitaliseTitle]="capitaliseTitle"
                                    [nameSurnameFontSize]="nameSurnameFontSize"
                                    [titleFontSize]="titleFontSize"
                                    [informationFontSize]="informationFontSize"
                                    [lineSeparator]="lineSeparator"
                                    fontFamily="{{fontFamily}}"

                                    [textAColour]="textAColour"
                                    [textBColour]="textBColour"
                                ></app-first-style>
                            </div>
                        </div>
                        
                        <div class="row mb-5">
                            <div class="col">
                                <p class="lead">2. Vertical</p>
                                <app-second-style
                                    name="{{name}}"
                                    surname="{{surname}}"
                                    title="{{title}}"
                                    phone="{{phone}}"
                                    email="{{email}}"
                                    location="{{location}}"
                                    logoUrl="{{logoUrl}}"
                                    [withoutLogo]="withoutLogo"

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

                                    [logoWidth]="logoWidth"
                                    [lineWidth]="lineWidth"
                                    socialIconSpace={{socialIconSpace}}

                                    [boldName]="boldName"
                                    [boldTitle]="boldTitle"
                                    [underlineName]="underlineName"
                                    [underlineTitle]="underlineTitle"
                                    [capitaliseNameSurname]="capitaliseNameSurname"
                                    [capitaliseTitle]="capitaliseTitle"
                                    [nameSurnameFontSize]="nameSurnameFontSize"
                                    [titleFontSize]="titleFontSize"
                                    [informationFontSize]="informationFontSize"
                                    [lineSeparator]="lineSeparator"
                                    fontFamily="{{fontFamily}}"

                                    [textAColour]="textAColour"
                                    [textBColour]="textBColour"
                                ></app-second-style>
                            </div>
                        </div>

                        <div class="row mb-5">
                            <div class="col">
                                <p class="lead">3. Vertical Centered</p>
                                <app-third-style
                                    name="{{name}}"
                                    surname="{{surname}}"
                                    title="{{title}}"
                                    phone="{{phone}}"
                                    email="{{email}}"
                                    location="{{location}}"
                                    logoUrl="{{logoUrl}}"
                                    [withoutLogo]="withoutLogo"

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

                                    [logoWidth]="logoWidth"
                                    [lineWidth]="lineWidth"
                                    socialIconSpace={{socialIconSpace}}

                                    [boldName]="boldName"
                                    [boldTitle]="boldTitle"
                                    [underlineName]="underlineName"
                                    [underlineTitle]="underlineTitle"
                                    [capitaliseNameSurname]="capitaliseNameSurname"
                                    [capitaliseTitle]="capitaliseTitle"
                                    [nameSurnameFontSize]="nameSurnameFontSize"
                                    [titleFontSize]="titleFontSize"
                                    [informationFontSize]="informationFontSize"
                                    [lineSeparator]="lineSeparator"
                                    fontFamily="{{fontFamily}}"

                                    [textAColour]="textAColour"
                                    [textBColour]="textBColour"
                                ></app-third-style>
                            </div>
                        </div>

                        <div class="row mb-5">
                            <div class="col">
                                <p class="lead">4. Simple</p>
                                <app-fourth-style
                                    name="{{name}}"
                                    surname="{{surname}}"
                                    title="{{title}}"
                                    phone="{{phone}}"
                                    email="{{email}}"
                                    location="{{location}}"
                                    logoUrl="{{logoUrl}}"
                                    [withoutLogo]="withoutLogo"

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

                                    [logoWidth]="logoWidth"
                                    [lineWidth]="lineWidth"
                                    socialIconSpace={{socialIconSpace}}

                                    [boldName]="boldName"
                                    [boldTitle]="boldTitle"
                                    [underlineName]="underlineName"
                                    [underlineTitle]="underlineTitle"
                                    [capitaliseNameSurname]="capitaliseNameSurname"
                                    [capitaliseTitle]="capitaliseTitle"
                                    [nameSurnameFontSize]="nameSurnameFontSize"
                                    [titleFontSize]="titleFontSize"
                                    [informationFontSize]="informationFontSize"
                                    [lineSeparator]="lineSeparator"
                                    fontFamily="{{fontFamily}}"

                                    [textAColour]="textAColour"
                                    [textBColour]="textBColour"
                                ></app-fourth-style>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <p class="lead">More styles are coming soon! </p>
                                <app-placeholder-signature></app-placeholder-signature>
                            </div>
                        </div>
                    </div>

                </section>
                
            </div>
        </div>

    `

})
export class HomeComponent {

    ngOnInit() {
        // this.checkAllSocial();
        // this.lineSeparator = true;
        // this.name = 'Nick';
        // this.surname = 'Polizogopoulos';
        // this.title = 'Front - End Software Developer';
        // this.phone = '+30 698 235 1857';
        // this.email = 'nick.polizogopoulos@gmail.com';
        // this.location = 'Patras, Western Greece';
        // this.logoUrl = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
        this.informationWindow = true;
        this.socialMediaWindow = true;
        this.preferencesWindow = true;
        this.typographyWindow = true;
        this.coloursWindow = true;
    }

    //* Signature Information
    name:string = 'Name';
    surname:string = 'Surname';
    title:string = 'Position title';
    phone:string = '+00 0000 000 000';
    email:string = 'email@email.com';
    location:string = 'Street, City, Country';
    logoUrl:string = '../../assets/signature-generator-logo.png';
    withoutLogo:boolean = false;

    //* Social Media
    website:boolean = false;
    facebook:boolean = false;
    instagram:boolean = false;
    linkedin:boolean = false;
    github:boolean = false;
    twitter:boolean = false;
    reddit:boolean = false;
    threads:boolean = false;
    linktree:boolean = false;

    //* Social Media Links
    websiteLink?:string;
    facebookLink?:string;
    instagramLink?:string;
    linkedinLink?:string;
    githubLink?:string;
    twitterLink?:string;
    redditLink?:string;
    threadsLink?:string;
    linktreeLink?:string;

    //* Signature Preferences
    logoWidth:number = 125;
    lineWidth:number = 30;
    socialIconSpace:string = '7';

    //* Typography
    boldName:boolean = false;
    boldTitle:boolean = false;
    underlineName:boolean = false;
    underlineTitle:boolean = false;
    capitaliseNameSurname:boolean = false;
    capitaliseTitle:boolean = false;
    nameSurnameFontSize:number = 19;
    titleFontSize:number = 14;
    informationFontSize:number = 14;
    lineSeparator:boolean = true;
    fontFamily:string = 'helvetica';
    
    //* Colours
    textAColour:string = '#000000';
    textBColour:string = '#000000';

    //* Settings Windows
    informationWindow:boolean = true;
    socialMediaWindow:boolean = true;
    preferencesWindow:boolean = true;
    typographyWindow:boolean = true;
    coloursWindow:boolean = true;

    //* Copying Spinners
    spinnerLoading:boolean = false;
    copyResponse:boolean = false;


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
    
    onWindowHandle( id:string ):void {
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