import { Component } from "@angular/core";

@Component({
    selector: 'app-about',
    template: `

        <section class="boxSection mt-4">
            <h1 class="mb-4 h2 mainblue">About this Application</h1>
            <div class="ms-3">
                <div class="mb-5">
                    <p class="lead">This is a remastered version of my very first 
                        <a class="angularColor nodecor" href="https://angular.io/" target="_blank">Angular</a>
                        Application, the "Super Signature Maker".</p>
                    <p class="lead">The idea was to create email signatures for my colleagues at a fast pace and start getting familiar with the framework.</p>
                    <p class="lead">It solved the problem of copying, editing and customising every person's signature in code.</p>
                    <p class="lead">This Application <strong class="text-underline">does not</strong> collect personal data from users.</p>
                    <p class="lead">Make sure you check the <a routerLink="/compatibility">Compatibility</a> section.</p>
                </div>
                
                <div class="mb-5">
                    <p class="lead">Thank you!</p>
                    <p class="lead">Nick Polizogopoulos.</p>
                </div>
                
                <div>
                    <p class="lead mb-5">Let's make an email signature?</p>
                    <button class="button" routerLink="/">Yes please!</button>
                    <p class="lead mt-5">
                        Found an issue? 
                        <a href="https://github.com/nickpolizogopoulos/signature-generator">
                            Fix it on GitHub.</a>
                    </p>
                </div>
            </div>
        </section>

    `
})
export class AboutComponent {}