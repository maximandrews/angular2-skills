import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, HostBinding } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'slide-menu',  // <slide-menu></slide-menu>
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './slidemenu.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './slidemenu.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SlideMenuComponent implements OnInit {
  @Output() closeClicked = new EventEmitter();
  @HostBinding('class.second-opened') secondOpened = false;
  // TypeScript public modifiers
  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    // this.title.getData().subscribe(data => this.data = data);
  }

  public closeMenu() {
    this.closeClicked.emit(false);
  }

  public dummy(event) {
    event.stopPropagation();
  }
  
  public menuClick() {
    this.secondOpened = true;
  }
  
  public secondClose() {
    this.secondOpened = false;
  }
}