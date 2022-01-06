import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _router : Router

    ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ngOnInit(): void {
  }

  submit(){
    const user = this.form.value.user;
    const password = this.form.value.password;

    if (user == 'amagna' && password == 'ihavebeenpwned') {
      this.success()
      this._router.navigate(['dashboard']).then(r => DashboardComponent )
    }
    else{
      this.error()
      this.form.reset()
    }

  }

  success(){
    this._snackBar.open('Sesion iniciada correctamente', '',{
      duration:1500,
      horizontalPosition:"center",
      verticalPosition:"bottom"
    })
  }


  error(){
    this._snackBar.open('Error, información invalida','',{
      duration:5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })


  }


}
