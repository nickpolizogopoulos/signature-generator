import { Component } from "@angular/core";


@Component({
    selector: 'app-navbar',
    template: `
    
        <nav class="navbar navbar-expand-md bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" routerLink="/">LOGO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
                        <li class="nav-item ms-3">
                            <a class="nav-link active" aria-current="page" routerLink="/">Home</a>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="nav-link" routerLink="/about">About</a>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="nav-link" routerLink="/compatibility">Compatibility</a>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="nav-link" routerLink="/password-reset">Password Reset</a>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="nav-link" routerLink="#">Source Code</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li>
                            <a routerLink="/" class="nodecor inherit me-3">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
    `,
})
export class NavbarComponent {

}