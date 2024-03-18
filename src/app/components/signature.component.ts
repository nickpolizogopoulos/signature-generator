import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'app-signature',
    template: `
    
        <div class="container-fluid">
            <div class="row">
                <div class="col">

                    <section class="boxSection mt-4">
                        <h1 class="mb-3 h2 mainblue">Signature Generator Application</h1>
                        <p class="lead">Welcome to the Signature Generator Application! Make your email signature fast and easy!</p>
                        <ol class="lead">
                            <li><p>Fill in the forms to generate your signatures.</p></li>
                            <li><p>Copy your signatures below the forms and paste them to your email client.</p></li>
                            <li><p class="lead">Make sure you're using this Application from a <a class="inherit" routerLink="/compatibility">compatible browser</a>.</p></li>
                            <li><p><a class="inherit" routerLink="/about">Learn more</a> about this Application!</p></li>
                        </ol>
                    </section>

                    <section class="boxSection">
                        <h4 class="mb-3">Enter your information</h4>
                        <div class="row">
                            <div class="col-xl-4">
                                <input (input)="onUpdateName($event)" type="text" class="form-control" placeholder="Name">
                                <input (input)="onUpdateSurname($event)"  type="text" class="form-control" placeholder="Surname">
                                <input (input)="onUpdateTitle($event)" type="text" class="form-control" placeholder="Title">
                                <input (input)="onUpdateLogoUrl($event)" type="text" class="form-control" placeholder="Logo url">
                            </div>
                            <div class="col-xl-4">
                                <input (input)="onUpdateEmail($event)" type="text" class="form-control" placeholder="Email">
                                <input (input)="onUpdatePhone($event)" type="text" class="form-control" placeholder="Phone">
                                <input (input)="onUpdateLocation($event)" type="text" class="form-control" placeholder="Location">
                            </div>
                        </div>
                    </section>

                    <section class="boxSection">
                        <h4 class="mb-3">Which social media platforms would you like to include in your signature?</h4>
                        <div class="row mb-2">
                            <div class="col-lg-2 col-xxl-1">
                                <div class="form-check">
                                    <input [(ngModel)]="website" class="form-check-input" type="checkbox" id="website">
                                    <label class="noselect" for="website">Website</label>
                                </div>
                            </div>
                            <div class="col-lg-2 col-xxl-1">
                                <div class="form-check">
                                    <input [(ngModel)]="facebook" class="form-check-input" type="checkbox" id="facebook">
                                    <label class="noselect" for="facebook">Facebook</label>
                                </div>
                            </div>
                            <div class="col-lg-2 col-xxl-1">
                                <div class="form-check">
                                    <input [(ngModel)]="instagram" class="form-check-input" type="checkbox" id="instagram">
                                    <label class="noselect" for="instagram">Instagram</label>
                                </div>
                            </div>
                            <div class="col-lg-2 col-xxl-1">
                                <div class="form-check">
                                    <input [(ngModel)]="linkedin" class="form-check-input" type="checkbox" id="linkedin">
                                    <label class="noselect" for="linkedin">LinkedIn</label>
                                </div>
                            </div>
                            <div class="col-lg-2 col-xxl-1">
                                <div class="form-check">
                                    <input  [(ngModel)]="github" class="form-check-input" type="checkbox" id="github">
                                    <label class="noselect" for="github">GitHub</label>
                                </div>
                            </div>
                            <div class="col-lg-2 col-xxl-1">
                                <div class="form-check">
                                    <input  [(ngModel)]="twitter" class="form-check-input" type="checkbox" id="twitter">
                                    <label class="noselect" for="twitter">Twitter</label>
                                </div>
                            </div>
                            <div class="col-lg-2 col-xxl-1">
                                <div class="form-check">
                                    <input  [(ngModel)]="reddit" class="form-check-input" type="checkbox" id="reddit">
                                    <label class="noselect" for="reddit">Reddit</label>
                                </div>
                            </div>
                            <div class="col-lg-2 col-xxl-1">
                                <div class="form-check">
                                    <input  [(ngModel)]="threads" class="form-check-input" type="checkbox" id="threads">
                                    <label class="noselect" for="threads">Threads</label>
                                </div>
                            </div>
                            <div class="col-lg-2 col-xxl-1">
                                <div class="form-check">
                                    <label (click)="checkAll()" class="noselect"><u>Check all</u></label>
                                </div>
                            </div>
                            <div class="col-lg-2 col-xxl-1">
                                <div class="form-check">
                                    <label (click)="uncheckAll()" class="noselect"><u>Uncheck all</u></label>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section *ngIf="website || facebook || instagram || linkedin || github || twitter || reddit || threads" class="boxSection">
                        <h4>Paste your social media links below</h4>
                        <small>[ In case you write any links by hand, <u>make sure you include "https://" infront of them</u> - e.g. <strong>https://</strong>google.com or <strong>https://</strong>www.google.com ]</small>
                        <div class="row mt-3">
                            <div class="col-xl-5">
                                <input *ngIf="website" [(ngModel)]="websiteLink" type="text" class="form-control" placeholder="Website">
                                <input *ngIf="facebook" [(ngModel)]="facebookLink" type="text" class="form-control" placeholder="Facebook">
                                <input *ngIf="instagram" [(ngModel)]="instagramLink" type="text" class="form-control" placeholder="Instagram">
                                <input *ngIf="linkedin" [(ngModel)]="linkedinLink" type="text" class="form-control" placeholder="LinkedIn">
                                <input *ngIf="twitter" [(ngModel)]="twitterLink" type="text" class="form-control" placeholder="X">
                                <input *ngIf="github" [(ngModel)]="githubLink" type="text" class="form-control" placeholder="GitHub">
                                <input *ngIf="reddit" [(ngModel)]="redditLink" type="text" class="form-control" placeholder="Reddit">
                                <input *ngIf="threads" [(ngModel)]="threadsLink" type="text" class="form-control" placeholder="Threads">
                            </div>
                        </div>
                    </section>

                    <section class="boxSection">
                        <h4 class="mb-3">Signature Preferences</h4>
                        <div class="row mb-2">
                            <div class="col-lg-2 col-xxl-2">
                                <div class="form-check">
                                    <input [(ngModel)]="boldName" class="form-check-input" type="checkbox" id="boldName">
                                    <label class="noselect" for="boldName"><strong>Bold</strong> Name & Surname</label>
                                </div>
                            </div>
                            <div class="col-lg-2 col-xxl-2">
                                <div class="form-check">
                                    <input [(ngModel)]="underlineName" class="form-check-input" type="checkbox" id="underlineName">
                                    <label class="noselect" for="underlineName"><u>Underline</u> Name & Surname</label>
                                </div>
                            </div>
                            <div class="col-lg-2 col-xxl-2">
                                <div class="form-check">
                                    <input [(ngModel)]="boldTitle" class="form-check-input" type="checkbox" id="boldTitle">
                                    <label class="noselect" for="boldTitle"><strong>Bold</strong> Title</label>
                                </div>
                            </div>
                            <div class="col-lg-2 col-xxl-2">
                                <div class="form-check">
                                    <input [(ngModel)]="underlineTitle" class="form-check-input" type="checkbox" id="underlineTitle">
                                    <label class="noselect" for="underlineTitle"><u>Underline</u> Title</label>
                                </div>
                            </div>
                            <div class="col-lg-2 col-xxl-2">
                                <div class="form-check">
                                    <input [(ngModel)]="lineAfterName" class="form-check-input" type="checkbox" id="line">
                                    <label class="noselect" for="line">Horizontal line after name</label>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="boxSection">
                        <h4 class="mb-4">Your Signature</h4>
                        <table #signature cellspacing="0" cellpadding="4" style="background-color: white; font-family: 'Montserrat', sans-serif; line-height: 1.3;" class="signature">
                            <tbody>
                                <tr style="background-color: transparent">
                                    <td style="vertical-align: top;"><img width="140" height="auto" src="{{logoUrl}}" alt="{{logoUrl ? 'logo' : 'Your logo'}}"></td>
                                    <td></td>
                                    <td style="vertical-align: top;">
                                        <table cellspacing="0" cellpadding="2">
                                            <tbody>
                                                <tr>
                                                    <td style="font-size: 17px;">
                                                        <span *ngIf="!boldName && !underlineName">{{name}} {{surname}}</span>
                                                        <strong *ngIf="boldName && !underlineName">{{name}} {{surname}}</strong>
                                                        <u *ngIf="!boldName && underlineName">{{name}} {{surname}}</u>
                                                        <strong *ngIf="boldName && underlineName"><u>{{name}} {{surname}}</u></strong>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-size: 12px;">
                                                        <span *ngIf="!boldTitle && !underlineTitle">{{title}}</span>
                                                        <strong *ngIf="boldTitle && !underlineTitle">{{title}}</strong>
                                                        <u *ngIf="!boldTitle && underlineTitle">{{title}}</u>
                                                        <strong *ngIf="boldTitle && underlineTitle"><u>{{title}}</u></strong>
                                                        <hr *ngIf="lineAfterName">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="font-size: 12px;">
                                                        <table cellspacing="0" cellpadding="2" style="font-size: 12px;">
                                                            <tbody>
                                                                <tr><td><span><strong>Tel.: </strong></span><span style="text-decoration:none; color: black;">{{phone}}</span></td></tr>
                                                                <tr><td><span><strong>Email: </strong></span><a style="text-decoration:none; color: black;" href = "mailto:{{email}}">{{email}}</a></td></tr>
                                                                <tr><td>{{location}}</td></tr>
                                                                <tr>
                                                                    <table>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td *ngIf="websiteLink"><a href="{{websiteLink}}"><img width="21" height="auto" src="../assets/social/web-logo.png" alt="website icon"></a></td>
                                                                                <td *ngIf="website" width="7"></td> 
                                                                                <td *ngIf="facebook"><a href="{{facebookLink}}"><img width="21" height="auto" src="../assets/social/facebook-logo.png" alt="linkedin icon"></a></td>
                                                                                <td *ngIf="facebook" width="7"></td>
                                                                                <td *ngIf="instagram"><a href="{{instagramLink}}"><img width="21" height="auto" src="../assets/social/instagram-logo.png" alt="instagram icon"></a></td>
                                                                                <td *ngIf="instagram" width="7"></td>
                                                                                <td *ngIf="linkedin"><a href="{{linkedinLink}}"><img width="21" height="auto" src="../assets/social/linkedin-logo.png" alt="linkedin icon"></a></td>
                                                                                <td *ngIf="linkedin" width="7"></td>
                                                                                <td *ngIf="github"><a href="{{githubLink}}"><img width="21" height="auto" src="../assets/social/github-logo.png" alt="github icon"></a></td>
                                                                                <td *ngIf="github" width="7"></td>
                                                                                <td *ngIf="twitter"><a href="{{twitterLink}}"><img width="21" height="auto" src="../assets/social/x-logo.png" alt="x icon"></a></td>
                                                                                <td *ngIf="twitter" width="7"></td>
                                                                                <td *ngIf="reddit"><a href="{{redditLink}}"><img width="21" height="auto" src="../assets/social/reddit-logo.png" alt="reddit icon"></a></td>
                                                                                <td *ngIf="reddit" width="7"></td>
                                                                                <td *ngIf="threads"><a href="{{threadsLink}}"><img width="21" height="auto" src="../assets/social/threads-logo.png" alt="reddit icon"></a></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="clickToCopyBox mb-4">
                            <a *ngIf="!copyResponse" (click)="copySignature()" class="my-btn">
                                <div *ngIf="spinnerLoading" class="spinner-border spinner-border-sm me-1" role="status"></div>
                                {{spinnerLoading ? 'Copying...' : 'Copy'}}
                            </a>
                            <span *ngIf="copyResponse"class="copy-response text-success">Done!</span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        
    `
})
export class SignatureComponent {

    name:string = 'Name';
    surname:string = 'Surname';
    title:string = 'Job title';
    phone:string = '0000 000 000';
    email:string = 'email@email.com';
    location:string = 'Street, City, Country';
    logoUrl:string = '';

    website:boolean = false;
    facebook:boolean = false;
    instagram:boolean = false;
    linkedin:boolean = false;
    github:boolean = false;
    twitter:boolean = false;
    reddit:boolean = false;
    threads:boolean = false;

    websiteLink:string | undefined = '';
    facebookLink:string | undefined = '';
    instagramLink:string | undefined = '';
    linkedinLink:string | undefined = '';
    githubLink:string | undefined = '';
    twitterLink:string | undefined = '';
    redditLink:string | undefined = '';
    threadsLink:string | undefined = '';
    @ViewChild('signature', { static: false }) signature!:ElementRef;

    boldName:boolean = false;
    boldTitle:boolean = false;
    underlineName:boolean = false;
    underlineTitle:boolean = false;
    lineAfterName:boolean = false;

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

    uncheckAll():void {
        this.website = false;
        this.facebook = false;
        this.instagram = false;
        this.linkedin = false;
        this.github = false;
        this.twitter = false;
        this.reddit = false;
        this.threads = false;
    }
    checkAll():void {
        this.website = true;
        this.facebook = true;
        this.instagram = true;
        this.linkedin = true;
        this.github = true;
        this.twitter = true;
        this.reddit = true;
        this.threads = true;
    }

    copySignature():void {
        this.spinnerLoading = true;
        setTimeout(() => {
            this.copyResponse = true;
        }, 1000)

        const content = this.signature.nativeElement;

        // range object to select the content
        const range = document.createRange();
        range.selectNode(content);

        // Get the selected content as a DocumentFragment
        const fragment = range.cloneContents();

        // Create a temporary div to hold the DocumentFragment
        const tempDiv = document.createElement('div');
        tempDiv.appendChild(fragment);

        // Copy the content of the temporary div to the clipboard
        document.body.appendChild(tempDiv);
        const selection = window.getSelection();
        selection!.removeAllRanges();
        range.selectNode(tempDiv);
        selection!.addRange(range);
        document.execCommand('copy');
        document.body.removeChild(tempDiv);
        selection!.removeAllRanges();
  
        setTimeout(() => {
            this.spinnerLoading = false;
            this.copyResponse = false;
        }, 2300)
    }
    
  }