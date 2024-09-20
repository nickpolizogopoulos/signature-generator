import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    template: `
    
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" routerLink="/">
                    <img width="110" height="auto" src="../../assets/signature-generator-logo.png" alt="logo">
                </a>
                <a class="navbar-brand" routerLink="/">
                    <h2 class="d-none d-lg-inline">Signature Generator</h2>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse ms-3" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li>
                            <h2 routerLink="/" class="d-lg-none mt-3 cursor-pointer">Signature Generator</h2>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="nav-link active" aria-current="page" routerLink="/">Home</a>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="nav-link" routerLink="/about">About</a>
                        </li>
                        <li class="nav-item ms-3">
                            <a class="nav-link" routerLink="/compatibility">Compatibility</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item ms-3">
                            <a class="nav-link" href="https://github.com/nickpolizogopoulos/signature-generator" target="_blank">
                                Source Code
                                <span style="margin-left: 17px;" class="top-0 start-100 translate-middle badge rounded-pill bg-danger">free!</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    `,
styles: [`

    .navbar-toggler {
        border: 0px solid black;
    }

    .navbar {
        background-color: white;
        margin: 25px 0px 0px 0px;
        border-radius: 10px;
        border: 1px solid rgba(21, 33, 64, 0.168);
        box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.113);
    }

`]
})
export class NavbarComponent {}