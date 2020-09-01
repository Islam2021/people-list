import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seletion-loader',
  template: `   
      <div [ngStyle]="getMyStyle()" class="skelt-load loader"></div>
  `,
  styleUrls: ['./seletion-loader-module.component.scss']
})
export class SeletionLoaderComponent implements OnInit {

  @Input() Cwidth;
  @Input() Cheight;
  @Input() circle: boolean;

  constructor() { }

  ngOnInit() {
  }

  getMyStyle() {  
    const myStyle = {
      'width.px': this.Cwidth ? this.Cwidth: '',
      'height.px': this.Cheight ? this.Cheight: '',
      'border-radius': this.circle ? '50%' : '',
    }
    return myStyle;
  }

}
