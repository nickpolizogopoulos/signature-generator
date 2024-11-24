import { 
    Component, 
    EventEmitter, 
    Input, 
    Output 
} from "@angular/core";

@Component({
    selector: 'app-collapse-window',
    template: `
    
        <div class="row mb-4">
            <div class="col-9">
                <span (click)="onWindowHandler()" class="h4 mainblue noselect cursor-pointer">
                    {{title}}
                </span>
            </div>
            <div class="col d-flex flex-row-reverse">
                <svg (click)="onWindowHandler()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                </svg>
            </div>
        </div>
    
    `,
    styles: [`
    
        .bi-chevron-up {
            color: grey;
            cursor: pointer;

            &:hover {
                color: black;
            }
        }
    
    `]
})
export class CollapseWindowComponent {

    @Input() title!: string;
    @Output() windowHandler = new EventEmitter<void>();

    onWindowHandler(): void {
        this.windowHandler.emit();
    }

}