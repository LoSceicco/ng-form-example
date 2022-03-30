import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.username = 'claudio';
    }, 1000)
  }

  public username:string = 'mario';
  public password:string = '';

  logUser() {
    console.log(this.username);
  }

  submitForm() {
    alert(`Logged in \n User: ${this.username}, password: ${this.password}`);
  }
}
