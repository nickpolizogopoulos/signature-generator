import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit():void {
    this.activatedRoute.fragment
      .subscribe({
        next: value => this.onScrollTo(value)
      })
  }

  onScrollTo( value:any ):void {
    document.getElementById(value)?.scrollIntoView();
  }

}
