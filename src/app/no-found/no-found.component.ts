import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-found',
  templateUrl: './no-found.component.html',
  styleUrls: ['./no-found.component.scss']
})
export class NoFoundComponent implements OnInit {
  loaded: boolean = false
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.loaded = true
    }, 3000)
  }


}
