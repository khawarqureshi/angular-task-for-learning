import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tasks';

  simpleAlertSuccess=() => {
    Swal.fire('Hey user!', 'You are the rockstar!', 'success');
  }
  simpleAlertInfo=() => {
    Swal.fire('Hey user!', 'You are the rockstar!', 'info');
  }
  simpleAlertError=() => {
    Swal.fire('Hey user!', 'You are the rockstar!', 'error');
  }
}
