import { Component } from "@angular/core";

@Component({
    selector: 'app-page-not-found',
    template: `
    
        <div class="container-fluid">
            <section class="boxSection mt-4">
                <div class="mb-4">
                    <h1 class="mb-3 h2 mainblue">404</h1>
                    <hr>
                    <p class="lead mb-5">This page does not exist.</p>
                    <a class="my-btn" routerLink="/signature">Go back</a>
                </div>
            </section>
        </div>
        
    `
})
export class PageNotFoundComponent {

}