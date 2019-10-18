import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeader = false;
  showSidebar = false;
  showFooter = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.activatedRoute.firstChild) {
          console.log("****************************", this.activatedRoute.firstChild);
          if (this.activatedRoute.firstChild.snapshot && this.activatedRoute.firstChild.snapshot.data) {
            this.showHeader = this.activatedRoute.firstChild.snapshot.data.showHeader !== false;
            this.showSidebar = this.activatedRoute.firstChild.snapshot.data.showSidebar !== false;
            this.showFooter = this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
          }
        }
      }
    });
  }
}
