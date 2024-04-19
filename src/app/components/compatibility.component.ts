import { Component } from "@angular/core";

@Component({
    selector: 'app-compatibility',
    template: `
    
        <div class="container-fluid">
            <section class="boxSection mt-4">
                <h1 class="mb-4 h2 mainblue">Application Compatibility</h1>
                
                <div class="mb-4">
                    <h4 class="mb-3">Mobile</h4>
                    <div class="ms-3">
                        <p class="lead">
                            This application has been optimized for phone screens and can be used 
                            on mobile devices to create signatures. 
                        </p>
                        <p class="lead">
                            While the signatures may appear broken on smaller screens, they function 
                            correctly like on larger devices regardless of their appearance.
                        </p>
                    </div>
                </div>

                <div class="mb-4">
                    <h4 class="mb-3">Browsers</h4>
                    <div class="ms-3">
                        <p class="lead">
                            
                        </p>
                    </div>
                </div>

                <div class="mb-4">
                    <h4 class="mb-3">Email Clients</h4>
                    <div class="ms-3">
                        <p class="lead">
                            
                        </p>
                    </div>
                </div>

            </section>

        </div>
    
    `
})
export class CompatibilityComponent {
    
}