import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  regesterform: FormGroup;

  constructor() {
    this.regesterform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]),
      username : new FormControl('', [Validators.pattern(/^\S*$/), Validators.required]),
      password : new FormControl('',[Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[+!@#$%^&*])[A-Za-z\d+!@#$%^&*]{8,}$/),Validators.required,Validators.minLength(8)])
    });
  }

get formcontrols(){
return this.regesterform.controls;
}

  handelSubmitForm(){
    if (this.regesterform.invalid) {
      return;
    }
    console.log(this.regesterform)
    console.log(this.regesterform.value)
    
  }
}
