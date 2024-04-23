import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-page-not-found',
    template: `
    
        <div class="container-fluid">
            <section class="boxSection mt-4">
                <div class="mb-4">
                    <h1 class="mb-3 h2 mainblue">404</h1>
                    <hr>
                    <div class="ms-3">
                        <p class="lead mb-4">This page does not exist.</p>
                        <button class="button" routerLink="/">Go Home</button>
                    </div>
                </div>
            </section>
        </div>
         
    `
})
export class PageNotFoundComponent {

}