import { 
    Component, 
    ElementRef, 
    ViewChild 
} from "@angular/core";

import { SignatureUtilitiesComponent } from "../../utilities/signature-utilities";

@Component({
    selector: 'app-fourth-style',
    template: `
    
        <div class="signatureBox">  
            <table #fourthSignature cellspacing="0" cellpadding="4" style="background-color: white; border-collapse: collapse;">
                <tr *ngIf="!withoutLogo">
                    <td>
                        <img src="{{logoUrl}}" width="{{logoWidth}}" height="auto" alt="logo">
                    </td>
                </tr>
                <tr>
                    <td>
                        <table cellpadding="0" style="border-collapse: collapse;">
                            <tr>
                                <td valign="top" >
                                    <table cellspacing="0" cellpadding="4" style="border-collapse: collapse;">
                                        <tr>
                                            <td style="font: {{nameSurnameFontSize}}px {{passSelectedFont()}}; color: {{textAColour}};">
                                                <span *ngIf="!boldName && !underlineName">{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</span>
                                                <strong *ngIf="boldName && !underlineName">{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</strong>
                                                <u *ngIf="!boldName && underlineName">{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</u>
                                                <strong *ngIf="boldName && underlineName"><u>{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</u></strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font: {{titleFontSize}}px {{passSelectedFont()}}; color: {{textBColour}};">
                                                <span *ngIf="!boldTitle && !underlineTitle">{{capitaliseTitle ? [title  | uppercase] : title}}</span>
                                                <strong *ngIf="boldTitle && !underlineTitle">{{capitaliseTitle ? [title  | uppercase] : title}}</strong>
                                                <u *ngIf="!boldTitle && underlineTitle">{{capitaliseTitle ? [title  | uppercase] : title}}</u>
                                                <strong *ngIf="boldTitle && underlineTitle"><u>{{capitaliseTitle ? [title  | uppercase] : title}}</u></strong>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td *ngIf="lineSeparator" valign="top" style="padding: 0px 20px 0px 0px; border-right: 2px solid {{textAColour}};"></td>
                                <td style="padding: 0px 0px 0px 20px;">
                                    <table cellpadding="0" style="border-collapse: collapse;">
                                        <tr style="cursor: pointer;">
                                            <td style="padding: 2px 0px; font: {{informationFontSize}}px {{passSelectedFont()}}; color: rgb(0, 0, 1);">
                                                <span style="color: {{textAColour}}; font-weight: 600;">
                                                    •&nbsp;&nbsp;
                                                </span>
                                                <a href="mailto:{{email}}" style="color: {{textBColour}}; text-decoration: none; font-family: {{passSelectedFont()}};" target="_blank">
                                                {{email}}
                                                </a>&nbsp;&nbsp;
                                            </td>
                                        </tr>
                                        <tr style="cursor: pointer;">
                                            <td style="padding: 2px 0px; font: {{informationFontSize}}px {{passSelectedFont()}}; color: rgb(0, 0, 1);">
                                                <span style="color: {{textAColour}}; font-weight: 600;">
                                                    •&nbsp;&nbsp;
                                                </span>
                                                <a href="tel:{{phone}}" style="color: {{textBColour}}; text-decoration: none; font-family: {{passSelectedFont()}};" target="_blank">
                                                {{phone}}
                                                </a>&nbsp;&nbsp;
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 2px 0px; font: {{informationFontSize}}px {{passSelectedFont()}}; color: rgb(0, 0, 1);">
                                                <span style="color: {{textAColour}}; font-weight: 600;">
                                                    •&nbsp;&nbsp;
                                                </span>
                                                <span style="color: {{textBColour}};">
                                                    {{location}}
                                                </span>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr><td>&nbsp;&nbsp;</td></tr>
                        </table>
                        <table cellpadding="0" style="border-collapse: collapse;" align="center">
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
        </div>
        <div class="clickToCopyBox mb-4">
            <button *ngIf="!copyResponse" (click)="copySignature()" class="button">
                <div *ngIf="spinnerLoading" class="spinner-border spinner-border-sm me-1" role="status"></div>
                {{ spinnerLoading ? 'Copying...' : 'Copy' }}
            </button>
            <button *ngIf="copyResponse" class="copy-response text-success" disabled>Done!</button>
        </div>

    `
})
export class FourthStyleComponent extends SignatureUtilitiesComponent {

    @ViewChild('fourthSignature', { static: false }) fourthSignature!: ElementRef;

    copySignature(): void {

        this.spinnerOn();

        this.copySignatureStyle( this.fourthSignature );

        this.spinnerOff();
    } 

}