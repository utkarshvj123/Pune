import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public isCollapsedlist = false;
  constructor() { }

  ngOnInit() {
  }
  logout(){
    console.log("Logout");
  }

}
