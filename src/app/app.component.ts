import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Tasks';

  materialUIModal() {
    console.log("material")
    this.displayStyle = "block";
  }
  bootstrapModal() {
    console.log("bootstrap")
    this.displayStyle = "block";
  }
  htmlModal() {
    console.log("html")
    this.displayStyle = "block";
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
