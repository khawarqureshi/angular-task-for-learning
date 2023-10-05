import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  title: string = 'Angular Tasks';


  @Input() text: string="";
  @Input() color: string ="";
  @Output() btnClick = new EventEmitter()

 constructor() {}

 ngOnInit(): void{}

 onClick() {
  // console.log("click")
  this.btnClick.emit();
 }
}
