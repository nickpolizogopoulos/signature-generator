import { Component } from "@angular/core";

@Component({
    selector: 'app-placeholder-signature',
    template: `
    
        <div class="skeleton">
            <div class="skeleton-left flex1">
                <div class="square"></div>
            </div>
            <div class="skeleton-right flex2">
                <div class="row name-surname">
                    <div class="line h17 w30 m10 me-2"></div>
                    <div class="line h17 w50 m10"></div>
                </div>
                <div class="line"></div>
                <div class="line h8 w75"></div>
                <div class="line h8 w40"></div>
                <div class="line h8 w75"></div>
                <div class="line h8 w100"></div>
            </div>
        </div>
        <div class="mt-2"> 
            <button href="#" tabindex="-1" class="button" disabled style="cursor: wait;">Copy</button>
        </div>
    
    `,
    styles: [`

        .skeleton {
            padding:15px;
            max-width: 300px;
            width: 100%;
            background: #fff;
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.12);
            cursor: wait;
        }
        .skeleton .square {
            height: 80px;
            border-radius: 5px;
            background: rgba(130, 130, 130, 0.2);
            background: -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(130, 130, 130, 0.2)), color-stop(18%, rgba(130, 130, 130, 0.3)), color-stop(33%, rgba(130, 130, 130, 0.2)));
            background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);
            background-size: 800px 100px;
            animation: wave-squares 2s infinite ease-out;
        }
        .skeleton .line {
            height: 12px;
            margin-bottom:6px;
            border-radius: 2px;
            background: rgba(130, 130, 130, 0.2);
            background: -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(130, 130, 130, 0.2)), color-stop(18%, rgba(130, 130, 130, 0.3)), color-stop(33%, rgba(130, 130, 130, 0.2)));
            background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);
            background-size: 800px 100px;
            animation: wave-lines 2s infinite ease-out;
        }
        .skeleton-right{
            flex:1;
        }
        .skeleton-left{
            flex:2;
            padding-right:15px;
        }
        .flex1{
            flex: 1;
        }
        .flex2{
            flex: 2;
        }
        .skeleton .line:last-child{
            margin-bottom: 0;
        }
        .name-surname {
            margin-left: 1px;
        }
        .h8{
            height: 8px !important;
        }
        .h17{
            height: 17px !important;
        }
        .w30{
            width:30% !important;
        }
        .w40{
            width:40% !important;
        }
        .w50{
            width:50% !important;
        }
        .w75{
            width: 75% !important
        }
        .w100{
            width: 100% !important
        }
        .m10{
            margin-bottom: 10px !important;
        }
        @keyframes wave-lines {
            0% {
                background-position: -468px 0;
            }
            100% {
                background-position: 468px 0;
            }
        }
        @keyframes wave-squares {
            0% {
                background-position: -468px 0;
            }
            100% {
                background-position: 468px 0;
            }
        }

    `]
})
export class PlaceholderSignatureComponent {

}