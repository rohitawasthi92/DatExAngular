
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer) {
  }
  items = [1, 2, 3, 4]; 
  getAccordionBodyText(value: string) {
    const textSample = ` <strong>This is the <mark>#${value}</mark> `;
    return this.sanitizer.bypassSecurityTrustHtml(textSample);
  }  
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
   
  }


 
}
