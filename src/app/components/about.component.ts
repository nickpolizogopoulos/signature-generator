import { Component } from "@angular/core";

@Component({
    selector: 'app-about',
    template: `
    
        <div class="container-fluid">
            <section class="boxSection mt-4">
                <h1 class="mb-4 h2 mainblue">About this Application</h1>
                <div class="ms-3">
                    <div class="mb-5">
                        <p class="lead">This is a remastered version of my very first Angular Application, the "Super Signature Maker".</p>
                        <p class="lead">The idea was to create email signatures for my colleagues at a fast pace and start getting familiar with Angular.</p>
                        <p class="lead">It solved the problem of copying, editing and customising every person's signature in code.</p>
                        <p class="lead">Make sure you're using this Application from a <a class="inherit" routerLink="/compatibility">compatible browser</a>.</p>
                    </div>
                    
                    <div class="mb-5">
                        <p class="lead">Thank you!</p>
                        <p class="lead">Nick Polizogopoulos.</p>
                    </div>
                    
                    <div>
                        <p class="lead mb-4">Let's make an email signature?</p>
                        <a class="button" routerLink="/">Yes please!</a>
                        <p class="lead mt-5">Found an issue? <a class="inherit" href="#">Fix it on GitHub</a>.</p>
                    </div>
                </div>
            </section>
        </div>
    
    `
})
export class AboutComponent {

}