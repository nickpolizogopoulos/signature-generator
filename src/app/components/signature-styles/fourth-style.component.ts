import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-fourth-style',
    template: `
    
        <p>fourth style! Name: {{name}}</p>

    `
})
export class FourthStyleComponent {

    @Input() name:string = '';
}