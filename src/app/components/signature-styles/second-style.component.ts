import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-second-style',
    template: `

        <p>second style! Name: {{name}}</p>
    
    `
})
export class SecondStyleComponent {

    @Input() name:string = '';
}