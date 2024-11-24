import { 
    Component, 
    ElementRef, 
    ViewChild 
} from "@angular/core";

import { SignatureUtilitiesComponent } from "../../utilities/signature-utilities";

@Component({
    selector: 'app-first-style',
    template: `
    
        <div class="signatureBox">
            <table #firstSignature cellspacing="0" cellpadding="4" style="border-collapse: collapse; background-color: white; font-family: {{ passSelectedFont() }}, sans-serif; line-height: 1.3;">
                <tr style="background-color: transparent">
                    <td *ngIf="!withoutLogo" style="vertical-align: top;">
                        <img width="{{logoWidth}}" height="auto" src="{{logoUrl}}" alt="logo">
                    </td>
                    <td *ngIf="!withoutLogo"></td>
                    <td style="vertical-align: top;">
                        <table cellspacing="0" cellpadding="2" style="border-collapse: collapse;">
                            <tbody>
                                <tr>
                                    <td style="font-size: {{nameSurnameFontSize}}px; color: {{textAColour}};">
                                        <span *ngIf="!boldName && !underlineName">{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</span>
                                        <strong *ngIf="boldName && !underlineName">{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</strong>
                                        <u *ngIf="!boldName && underlineName">{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</u>
                                        <strong *ngIf="boldName && underlineName"><u>{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</u></strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-size: {{titleFontSize}}px; color: {{textBColour}};">
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
                                                <td style="margin: 0.1px; padding: 0px; border-top: 2px solid {{textAColour}}; width: {{lineWidth}}px;"></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table cellspacing="0" cellpadding="2" style="font-size: {{informationFontSize}}px;">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span style="color: {{textAColour}};"><strong>Email: </strong></span><a style="text-decoration:none; color: {{textBColour}};" href = "mailto:{{email}}">{{email}}</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span style="color: {{textAColour}};"><strong>Tel.: </strong></span><a style="text-decoration:none; color: {{textBColour}};" href = "tel:{{phone}}">{{phone}}</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="color: {{textBColour}};">{{location}}</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
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
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
        <div class="clickToCopyBox mb-4">
            <button *ngIf="!copyResponse" (click)="copySignature()" class="button">
                <div *ngIf="spinnerLoading" class="spinner-border spinner-border-sm me-1" role="status"></div>
                {{ spinnerLoading ? 'Copying...' : 'Copy' }}
            </button>
            <button *ngIf="copyResponse"class="copy-response text-success" disabled>Done!</button>
        </div>
        
    `
})
export class FirstStyleComponent extends SignatureUtilitiesComponent {

    @ViewChild('firstSignature', { static: false }) firstSignature!: ElementRef;

    copySignature(): void {

        this.spinnerOn();

        this.copySignatureStyle(this.firstSignature);

        this.spinnerOff();
    } 

}
