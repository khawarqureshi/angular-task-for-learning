import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  myForm = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(4)]),
    email : new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  submitData = () => {
    console.log("first", this.myForm.value)
  }
}
