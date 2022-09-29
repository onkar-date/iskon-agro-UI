import { CONTACT_DETAILS } from './../../shared/constants/contact.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  CONTACT_DETAILS = CONTACT_DETAILS;
  constructor() { }

  ngOnInit(): void {
  }
}
