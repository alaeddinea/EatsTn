import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filtres',
  templateUrl: './filtres.component.html',
  styleUrls: ['./filtres.component.scss']
})
export class FiltresComponent implements OnInit {
  @Output() childToParent = new EventEmitter();

  rangeValue=4;
  display: boolean = false;
  display2: boolean = false;
  constructor() {}

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
}
showDialog2() {
  this.display2 = true;
}
filterDeleveryfee(value:any){
  this.childToParent.emit(value);
  
  

}
}
