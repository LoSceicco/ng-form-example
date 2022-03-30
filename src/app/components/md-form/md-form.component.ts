import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-md-form',
  templateUrl: './md-form.component.html',
  styleUrls: ['./md-form.component.css']
})
export class MdFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const usr = this.myForm.get('username');
    if(usr) {
      usr.valueChanges.pipe(
        debounceTime(500),
        filter(val => !!val)
      ).subscribe((val:string) => {
        if(val.toLowerCase() === 'mario') {
          alert('Ciao Mario!!')
        }
      })
    }
  }

  public myForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', Validators.required),
  })

  submitForm() {
    const username = this.myForm.get('username')?.value;
    const password = this.myForm.get('password')?.value;
    alert(`Logged in \n User: ${username}, password: ${password}`);
  }

  inputHasError(inputName:string, errorName:string) {
    const control = this.myForm.get(inputName);
    if(!control) { return false; }
    return control.errors && control.errors[errorName];
  }
}
