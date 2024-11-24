import {
    Component, 
    Input 
} from "@angular/core";

@Component({
    template: ''
})
export class SignatureUtilitiesComponent {

    //* Signature Information
    @Input() name?:string;
    @Input() surname?:string;
    @Input() title?:string;
    @Input() phone?:string;
    @Input() email?:string;
    @Input() location?:string;
    @Input() logoUrl?:string;
    @Input() withoutLogo!:boolean;

    //* Social Media
    @Input() website!:boolean;
    @Input() facebook!:boolean;
    @Input() instagram!:boolean;
    @Input() linkedin!:boolean;
    @Input() github!:boolean;
    @Input() twitter!:boolean;
    @Input() reddit!:boolean;
    @Input() threads!:boolean;
    @Input() linktree!:boolean;

    //* Social Media Links
    @Input() websiteLink?:string;
    @Input() facebookLink?:string;
    @Input() instagramLink?:string;
    @Input() linkedinLink?:string;
    @Input() githubLink?:string;
    @Input() twitterLink?:string;
    @Input() redditLink?:string;
    @Input() threadsLink?:string;
    @Input() linktreeLink?:string;

    //* Signature Preferences
    @Input() logoWidth!:number;
    @Input() lineWidth!:number;
    @Input() socialIconSpace!:string;

    //* Typography
    @Input() boldName!:boolean;
    @Input() boldTitle!:boolean;
    @Input() underlineName!:boolean;
    @Input() underlineTitle!:boolean;
    @Input() capitaliseNameSurname:boolean = false;
    @Input() capitaliseTitle:boolean = false;
    @Input() nameSurnameFontSize!:number;
    @Input() titleFontSize!:number;
    @Input() informationFontSize!:number;
    @Input() lineSeparator!:boolean;
    @Input() fontFamily!:string;

    //* Colours
    @Input() textAColour?:string;
    @Input() textBColour?:string;

    //* Copying Spinners
    @Input() spinnerLoading:boolean = false;
    @Input() copyResponse:boolean = false;

    //* Copying Spinners Timers
    spinnerOnTime:number = 1000;
    spinnerOffTime:number = 2300;

    passSelectedFont():string {
        return (
              this.fontFamily === 'helvetica'
            ? 'helvetica'
            : this.fontFamily === 'monospace'
            ? 'monospace'
            : this.fontFamily === 'didot'
            ? 'didot'
            : this.fontFamily === 'futura'
            ? 'futura'
            : this.fontFamily === 'copperplate'
            ? 'copperplate' 
            : ''
        );
    }

    copySignatureStyle( signature: any ):void {
        const content = signature.nativeElement as HTMLElement;

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
    } 

    spinnerOn(): void {
        this.spinnerLoading = true;
        setTimeout(() =>
            this.copyResponse = true,
            this.spinnerOnTime
        );
    }

    spinnerOff(): void {
        setTimeout(() =>
            {
                this.spinnerLoading = false;
                this.copyResponse = false;
            },
            this.spinnerOffTime
        );
    }
    
}