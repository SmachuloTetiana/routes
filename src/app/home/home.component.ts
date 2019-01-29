import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('f') signForm: NgForm;
  comment = '';
  submitted = false;
  user = {
    email: '',
    subscription: '',
    password: '',
    comment: ''
  };

  suggestUser() {
    this.signForm.setValue({
      email: '',
      subscription: '',
      password: '',
      comment: ''
    })
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServers() {
    this.router.navigate(['servers']);
  }

  onSubmit() {
    // console.log(this.signForm);
    this.submitted = true;
    this.user.email = this.signForm.value.email;
    this.user.subscription = this.signForm.value.subscription;
    this.user.password = this.signForm.value.password;
    this.user.comment = this.signForm.value.myComment;

  }

}
