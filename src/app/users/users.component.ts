import { Component, OnInit,ViewChild, ElementRef, } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  @ViewChild('parent') item: ElementRef;
  // breadcrumbs : any ;


  constructor() { }

  ngOnInit() {
    // console.log("breadcrums",this.item);
  }

}
