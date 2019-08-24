import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggclass = false ;
  @ViewChild('collapsed') item: ElementRef;


  constructor(@Inject(DOCUMENT) document, public r: Renderer2) {

    if (this.toggclass === false) {
      this.r.addClass(document.body, 'sidebar-open');
    }

  }

  ngOnInit() {
  }

  addclass() {
    if (this.toggclass) {

      this.r.addClass(document.body, 'sidebar-open');
      this.r.removeClass(document.body, 'sidebar-close');

      this.toggclass = false ;

    } else {
      this.r.addClass(document.body, 'sidebar-close');
      // this.r.removeClass(this.item , 'collapsed' );
      this.r.removeClass(document.body, 'sidebar-open');

      this.toggclass = true ;
    }
  }

}
