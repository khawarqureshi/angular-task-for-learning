import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  myForm = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]+$")]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  submitData = () => {
    console.log("first", this.myForm.value)
  }

  get name() {
    return this.myForm.get("name");
  }
  get email() {
    return this.myForm.get("email")
  }
  get password() {
    return this.myForm.get("password")
  }
}
