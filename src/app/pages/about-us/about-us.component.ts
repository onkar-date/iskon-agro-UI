import { Component, OnInit } from '@angular/core';
import { COMPANY_DATA } from 'src/app/shared/constants/data.constant';
import *  as AOS from 'aos';;
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  copmanyData = COMPANY_DATA;
  constructor() {
    
  }

  ngOnInit(): void {
    AOS.init({duration: 1000});//AOS - 2
    AOS.refresh()
  }

}
