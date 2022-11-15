import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  protected loginForm!: FormGroup
  public loading: boolean = false

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.inItLoginForm();
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

  }

  inItLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmitLoginForm(): void {
    this.loading = true;
    setTimeout(() => {
      console.log(this.loginForm.value)
      this.loading = false
    }, 5000)
  }

}
