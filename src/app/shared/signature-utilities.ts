import {
    Component, 
    Input 
} from "@angular/core";

@Component({
    template: ''
})
export class SignatureUtilitiesComponent {

    @Input() name?:string;
    @Input() surname?:string;
    @Input() title?:string;
    @Input() phone?:string;
    @Input() email?:string;
    @Input() location?:string;
    @Input() logoUrl?:string;
    @Input() withoutLogo!:boolean;

    @Input() website!:boolean;
    @Input() facebook!:boolean;
    @Input() instagram!:boolean;
    @Input() linkedin!:boolean;
    @Input() github!:boolean;
    @Input() twitter!:boolean;
    @Input() reddit!:boolean;
    @Input() threads!:boolean;
    @Input() linktree!:boolean;

    @Input() websiteLink?:string;
    @Input() facebookLink?:string;
    @Input() instagramLink?:string;
    @Input() linkedinLink?:string;
    @Input() githubLink?:string;
    @Input() twitterLink?:string;
    @Input() redditLink?:string;
    @Input() threadsLink?:string;
    @Input() linktreeLink?:string;

    @Input() boldName!:boolean;
    @Input() boldTitle!:boolean;
    @Input() underlineName!:boolean;
    @Input() underlineTitle!:boolean;
    @Input() lineSeparator!:boolean;
    @Input() textAColour?:string;
    @Input() textBColour?:string;
    @Input() socialIconSpace!:string;
    @Input() lineWidth!:number;

    @Input() capitaliseNameSurname:boolean = false;
    @Input() capitaliseTitle:boolean = false;

    @Input() nameSurnameFontSize!:number;
    @Input() titleFontSize!:number;
    @Input() informationFontSize!:number;

    @Input() spinnerLoading:boolean = false;
    @Input() copyResponse:boolean = false;

    spinnerOnTime:number = 1000;
    spinnerOffTime:number = 2300;


    copySignatureStyle( signature:any ):void {
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

    spinnerOn():void {
        this.spinnerLoading = true;
        setTimeout(() => {
            this.copyResponse = true;
        }, this.spinnerOnTime);
    }

    spinnerOff():void {
        setTimeout(() => {
            this.spinnerLoading = false;
            this.copyResponse = false;
        }, 2300);
    }
    
}