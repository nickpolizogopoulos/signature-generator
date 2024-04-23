import { Component } from "@angular/core";

@Component({
    selector: 'app-compatibility',
    template: `
    
        <div class="container-fluid">
            <section class="boxSection mt-4">
                <h1 class="mb-4 h2 mainblue">Application Compatibility</h1>
                
                <div class="ms-3 mb-4">
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

                <div class="ms-3 mb-4">
                    <h4 class="mb-3">Browsers</h4>
                    <div class="ms-3">
                        <p class="lead">
                            The signatures use rich text for the name and other details. Some browsers prevent the users from copying rich text due to security reasons.
                        </p>
                    </div>
                </div>

                <div class="ms-3 mb-4">
                    <h4 class="mb-3">Email Clients</h4>
                    <div class="ms-3">
                        <p class="lead">
                            The signatures from this application work seamlessly with most email clients but will encounter issues with Outlook. 
                        </p>
                        <p class="lead">
                            Unfortunately, Outlook's handling of email signatures can be inconsistent and may not display the signatures as intended. 
                        </p>
                        <p class="lead">
                            Outlook and its issues are a hotly debated topic on the internet.
                        </p>
                    </div>
                </div>

                <div class="ms-3 mb-4">
                    <h4 class="mb-3">Recommendation</h4>
                    <div class="ms-3">
                        <p class="lead">
                            I consider the "Firefox - Spark" combo the best. I am using Mozilla Firefox and the signatures from this Applicaton work like a charm. 
                        </p>
                        <p class="lead">
                            Spark is a great email client, it doesn't complain about the signatures, it accepts the format and doesn't spoil anything like Outlook.
                        </p>
                    </div>
                </div>
                
            </section>
        </div>

    `
})
export class CompatibilityComponent {

}
