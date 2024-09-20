import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  
    <div class="boxSection text-center">

      <img src="../../assets/signature-generator-logo.png" alt="logo" class="footer-logo">

      <a href="https://github.com/nickpolizogopoulos/signature-generator" class="mainblue nodecor" target="_blank">
        <strong>Signature Generator</strong>
      </a>
      
      <br class="d-inline d-md-none">

      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right arrow-icon" viewBox="0 0 16 16">
        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
      </svg>
      An
      <a class="angularColor nodecor" href="https://angular.dev/" target="_blank">
        Angular</a>
      Application by 

      <br class="d-inline d-sm-none">

      <a href="https://nick-polizogopoulos.web.app/" class="nodecor" target="_blank">Nick Polizogopoulos</a>
    </div>
  
  `,
  styles: [`
  
    .footer-logo {
      max-width: 50px;
      margin: 0px 10px 2px 0px ;
    }
    
    .arrow-icon {
      margin: 0px 3px 3px 7px;
    }
  
  `]
})
export class FooterComponent {}
