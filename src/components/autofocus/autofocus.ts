import { Directive, ElementRef, Renderer } from '@angular/core';
import { Keyboard } from "@ionic-native/keyboard";

/*
  Generated class for the Autofocus directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[autofocus]' // Attribute selector
})
export class Autofocus {

  constructor(private renderer: Renderer, private elementRef: ElementRef, private keyboard: Keyboard) {
    console.log('Hello Autofocus Directive');
  }

  ngAfterViewInit() {
    const element = this.elementRef.nativeElement.querySelector('input');
    // we need to delay our call in order to work with ionic ...
    setTimeout(() => {
      element.focus();
      // this.keyboard.show();
    }, 400);
  }
}
