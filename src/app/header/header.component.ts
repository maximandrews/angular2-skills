import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'header',  // <header></header>
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './header.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @Output() menuClicked = new EventEmitter();
  // TypeScript public modifiers
  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    // this.title.getData().subscribe(data => this.data = data);
  }

  public toggleRightSlide(obj) {
    this.menuClicked.emit(true);
  }
}
