/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: [ './app.component.scss' ],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @HostBinding('class.menu-opened') menuOpened = false;

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
  }

  public menuClicked(event) {
    console.log('Menu Opened:', event);
    this.menuOpened = event;
  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
