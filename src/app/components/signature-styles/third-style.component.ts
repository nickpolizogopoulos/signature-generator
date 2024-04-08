import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-third-style',
    template: `
    
        <p>third style! Name: {{name}}</p>
    
    `
})
export class ThirdStyleComponent {

    @Input() name:string = '';
}