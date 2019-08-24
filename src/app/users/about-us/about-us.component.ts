import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' ;
@Component({
  selector: 'app-generic-voucher',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit() {
  }

}
