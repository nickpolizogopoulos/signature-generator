import { Component, ElementRef, ViewChild } from "@angular/core";
import { SignatureUtilitiesComponent } from "../../shared/signature-utilities";

@Component({
    selector: 'app-second-style',
    template: `

        <table #secondSignature cellspacing="0" cellpadding="4" style="background-color: white; border-collapse: collapse; font-size: 11.7px; line-height: 1.3;" class="signatureBox">
            <tr *ngIf="!withoutLogo">
                <td>
                    <img src="{{logoUrl}}" width="{{logoWidth}}" height="auto" alt="logo">
                </td>
            </tr>
            <tr>
                <td style="font: {{nameSurnameFontSize}}px {{ passSelectedFont() }}; color: {{textAColour}}; letter-spacing: 0.4pt;">
                    <span *ngIf="!boldName && !underlineName">{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</span>
                    <strong *ngIf="boldName && !underlineName">{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</strong>
                    <u *ngIf="!boldName && underlineName">{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</u>
                    <strong *ngIf="boldName && underlineName"><u>{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</u></strong>
                </td>
            </tr>
            <tr>
                <td style="font: {{titleFontSize}}px {{ passSelectedFont() }}; color: rgb(134, 69, 69); color: {{textBColour}};">
                    <span *ngIf="!boldTitle && !underlineTitle">{{capitaliseTitle ? [title  | uppercase] : title}}</span>
                    <strong *ngIf="boldTitle && !underlineTitle">{{capitaliseTitle ? [title  | uppercase] : title}}</strong>
                    <u *ngIf="!boldTitle && underlineTitle">{{capitaliseTitle ? [title  | uppercase] : title}}</u>
                    <strong *ngIf="boldTitle && underlineTitle"><u>{{capitaliseTitle ? [title  | uppercase] : title}}</u></strong>
                </td>
            </tr>
            <tr>
                <td *ngIf="!lineSeparator" style="padding: 5px 0px;"></td>
                <td *ngIf="lineSeparator" style="padding: 15px 0px 15px 5px;">
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td height="1" width="{{lineWidth}}" style="margin: 0.1px; padding: 0px; border-top: 2px solid rgb(65, 37, 37);"></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="font: {{informationFontSize}}px {{ passSelectedFont() }}; color: {{textAColour}};">
                    <span style="font-weight: 600;">Email:&nbsp;</span>
                    <a href="mailto:{{email}}" style="color: {{textBColour}}; text-decoration: none; font-family: {{ passSelectedFont() }};" target="_blank">
                        {{email}}
                    </a>
                </td>
            </tr>
            <tr>
                <td style="font: {{informationFontSize}}px {{ passSelectedFont() }}; color: {{textAColour}};">
                    <span style="font-weight: 600;">Phone:&nbsp;</span>
                    <a href="tel:{{phone}}" style="color: {{textBColour}}; text-decoration: none; font-family: {{ passSelectedFont() }};" target="_blank">
                        {{phone}}
                    </a>
                </td>
            </tr>
            <tr>
                <td style="font: {{informationFontSize}}px {{ passSelectedFont() }}; color: {{textBColour}};">
                    {{location}}
                </td>
            </tr>
            <tr>
                <td>
                    <table cellpadding="0" style="border-collapse: collapse;">
                        <tr>
                            <td>
                                <tr>
                                    <td *ngIf="website"><a href="{{websiteLink}}"><img width="21" height="auto" src="../assets/social/web-logo.png" alt="website icon"></a></td>
                                    <td *ngIf="website" width="{{socialIconSpace}}"></td>
                                    <td *ngIf="facebook"><a href="{{facebookLink}}"><img width="21" height="auto" src="../assets/social/facebook-logo.png" alt="linkedin icon"></a></td>
                                    <td *ngIf="facebook" width="{{socialIconSpace}}"></td>
                                    <td *ngIf="instagram"><a href="{{instagramLink}}"><img width="21" height="auto" src="../assets/social/instagram-logo.png" alt="instagram icon"></a></td>
                                    <td *ngIf="instagram" width="{{socialIconSpace}}"></td>
                                    <td *ngIf="linkedin"><a href="{{linkedinLink}}"><img width="21" height="auto" src="../assets/social/linkedin-logo.png" alt="linkedin icon"></a></td>
                                    <td *ngIf="linkedin" width="{{socialIconSpace}}"></td>
                                    <td *ngIf="github"><a href="{{githubLink}}"><img width="21" height="auto" src="../assets/social/github-logo.png" alt="github icon"></a></td>
                                    <td *ngIf="github" width="{{socialIconSpace}}"></td>
                                    <td *ngIf="twitter"><a href="{{twitterLink}}"><img width="21" height="auto" src="../assets/social/x-logo.png" alt="x icon"></a></td>
                                    <td *ngIf="twitter" width="{{socialIconSpace}}"></td>
                                    <td *ngIf="reddit"><a href="{{redditLink}}"><img width="21" height="auto" src="../assets/social/reddit-logo.png" alt="reddit icon"></a></td>
                                    <td *ngIf="reddit" width="{{socialIconSpace}}"></td>
                                    <td *ngIf="threads"><a href="{{threadsLink}}"><img width="21" height="auto" src="../assets/social/threads-logo.png" alt="reddit icon"></a></td>
                                    <td *ngIf="threads" width="{{socialIconSpace}}"></td>
                                    <td *ngIf="linktree"><a href="{{linktreeLink}}"><img width="21" height="auto" src="../assets/social/linktree-logo.png" alt="reddit icon"></a></td>
                                </tr>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <div class="clickToCopyBox mb-4">
            <button *ngIf="!copyResponse" (click)="copySignature()" class="button">
                <div *ngIf="spinnerLoading" class="spinner-border spinner-border-sm me-1" role="status"></div>
                {{spinnerLoading ? 'Copying...' : 'Copy'}}
            </button>
            <span *ngIf="copyResponse"class="copy-response text-success">Done!</span>
        </div>
    
    `
})
export class SecondStyleComponent extends SignatureUtilitiesComponent {

    @ViewChild('secondSignature', { static: false }) secondSignature!:ElementRef;

    copySignature():void {

        this.spinnerOn();

        this.copySignatureStyle(this.secondSignature);

        this.spinnerOff();
    } 

}