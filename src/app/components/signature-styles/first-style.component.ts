import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-first-style',
    template: `
    
        <p>first style! Name: {{name}}</p>

    `
})
export class FirstStyleComponent {

    @Input() name:string = 'Name';
}