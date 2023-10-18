import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-data-discovery',
  templateUrl: './preview-data-discovery.component.html',
  styleUrls: ['./preview-data-discovery.component.scss']
})
export class PreviewDataDiscoveryComponent implements OnInit {
  @Input('app-preview-data-discovery') inData: any;

  ngOnInit(): void {
    console.log(this.inData);
  }
}
