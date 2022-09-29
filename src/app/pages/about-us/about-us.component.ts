import { Component, OnInit } from '@angular/core';
import { COMPANY_DATA } from 'src/app/shared/constants/data.constant';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  copmanyData = COMPANY_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
