import {
    Component,
    ElementRef,
    ViewChild
} from "@angular/core";

import { SignatureUtilitiesComponent } from "../../utilities/signature-utilities";

@Component({
    selector: 'app-third-style',
    template: `
    
        <div class="signatureBox">
            <table #thirdSignature border="0" cellspacing="0" cellpadding="4" style="background-color: white; border-collapse: collapse; line-height: 1.3;">
                <tr *ngIf="!withoutLogo">
                    <td align="center">
                        <img src="{{logoUrl}}" width="{{logoWidth}}" alt="logo">
                    </td>
                </tr>
                <tr>
                    <td style="font: {{nameSurnameFontSize}}px {{ passSelectedFont() }}; color: {{textAColour}};" align="center">
                        <span *ngIf="!boldName && !underlineName">{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</span>
                        <strong *ngIf="boldName && !underlineName">{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</strong>
                        <u *ngIf="!boldName && underlineName">{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</u>
                        <strong *ngIf="boldName && underlineName"><u>{{capitaliseNameSurname ? [name  | uppercase] : name}} {{capitaliseNameSurname ? [surname  | uppercase] : surname}}</u></strong>
                    </td>
                </tr>
                <tr>
                    <td style="color: {{textBColour}}; font-style: normal; font-stretch: normal; font-size: {{titleFontSize}}px; line-height: 20.3px; font-family: {{ passSelectedFont() }}; font-size-adjust: none; font-kerning: auto; font-optical-sizing: auto; font-language-override: normal; font-feature-settings: normal; font-variation-settings: normal;" align="center">
                        <span *ngIf="!boldTitle && !underlineTitle">{{capitaliseTitle ? [title  | uppercase] : title}}</span>
                        <strong *ngIf="boldTitle && !underlineTitle">{{capitaliseTitle ? [title  | uppercase] : title}}</strong>
                        <u *ngIf="!boldTitle && underlineTitle">{{capitaliseTitle ? [title  | uppercase] : title}}</u>
                        <strong *ngIf="boldTitle && underlineTitle"><u>{{capitaliseTitle ? [title  | uppercase] : title}}</u></strong>
                    </td>
                </tr>
                <tr>
                    <td *ngIf="!lineSeparator" style="padding: 3px 0px;"></td>
                    <td *ngIf="lineSeparator" style="padding: 9px 0px;" align="center">
                        <table cellpadding="0" style="border-collapse: collapse;">
                            <tr>
                                <td height="1" style="border-top: 2px solid {{textAColour}}; width: {{lineWidth}}px;"></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr style="cursor: pointer;">
                    <td align="center" style="padding: 7px 20px; font: {{informationFontSize}}px {{ passSelectedFont() }}; color: rgb(0, 0, 0); border-bottom: 1px solid rgb(235, 228, 228);">
                        <a href="mailto: {{email}}" style="color: {{textBColour}}; text-decoration: none; font-family: {{ passSelectedFont() }};" target="_blank">
                            {{email}}&nbsp;&nbsp;
                        </a>
                        <a href="tel:{{phone}}" style="color: {{textBColour}}; text-decoration: none; font-family: {{ passSelectedFont() }};" target="_blank">
                            {{phone}}
                        </a>
                    </td>
                </tr>
                <tr>
                    <td style="font: {{informationFontSize}}px {{ passSelectedFont() }}; color: rgb(0, 0, 1);" align="center">
                        <table border="0" cellspacing="0" cellpadding="0" align="center" style="border-collapse: collapse;">
                            <tr>
                                <td style="padding: 7px 20px; font: {{informationFontSize}} {{ passSelectedFont() }}; color: rgb(0, 0, 0); border-bottom: 1px solid rgb(235, 228, 228);">
                                    <span style="color: {{textBColour}};">
                                        {{location}}
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center">
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
        </div>
        <div class="clickToCopyBox mb-4">
            <button *ngIf="!copyResponse" (click)="copySignature()" class="button">
                <div *ngIf="spinnerLoading" class="spinner-border spinner-border-sm me-1" role="status"></div>
                {{spinnerLoading ? 'Copying...' : 'Copy'}}
            </button>
            <button *ngIf="copyResponse"class="copy-response text-success" disabled>Done!</button>
        </div>

    `
})
export class ThirdStyleComponent extends SignatureUtilitiesComponent {

    @ViewChild('thirdSignature', { static: false }) thirdSignature!: ElementRef;

    copySignature(): void {

        this.spinnerOn();

        this.copySignatureStyle( this.thirdSignature );

        this.spinnerOff();
    } 

}