import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  messageDisplay: boolean;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  myForm: FormGroup;

  ngOnInit() {
    this.messageDisplay = false;
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  loginfunction() {
    if ((this.myForm.value.email !== localStorage.getItem('email')) || (this.myForm.value.password !== localStorage.getItem('password'))) {
      console.log('Not matched');
      this.messageDisplay = true;
    } else {
      this.router.navigate(['/users']);
    }

    //
  }

  clickedFunction() {
    Swal.fire({
      title: 'Please enter your Email id',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: false,
      confirmButtonText: 'Submit',
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: `Mail sent successfully`,
        });
      }
    });
  }


  onSubmit() {
    console.log(this.myForm.value);
  }
}
