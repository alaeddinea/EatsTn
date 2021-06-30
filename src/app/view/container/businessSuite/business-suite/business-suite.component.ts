import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-suite',
  templateUrl: './business-suite.component.html',
  styleUrls: ['./business-suite.component.scss']
})
export class BusinessSuiteComponent implements OnInit {
  displayFistShow: boolean = true;
  constructor() { }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.displayFistShow = true;
    }, 10);

  }
  closeFistShow() {
    this.displayFistShow = false;
  }

}
