import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ShareService} from '../share.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private service: ShareService, private fb: FormBuilder, private route: Router) {
  }

  myForm: FormGroup;
  submitted = false;
  notMatched: boolean;
  country: any;
  countryCode: any;
  countryName: any;
  error;

  ngOnInit() {
    this.service.getCountries().subscribe(res => {
      console.log(res);
      this.country = res;
    }, error => {
      this.error = error;
      console.log(this.error);
      if (this.error.Message) {
        this.errorHandling('Message', this.error.Message);
      } else {
        this.errorHandling('Error', this.error.Error);
      }
    });

    this.notMatched = false;
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      date: ['', Validators.required],
      countryname: ['', Validators.required],
      countryCode: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  gettingCountryNameArray(code) {
    console.log(code);

    this.service.gettingSelectedCountry(code).subscribe(res => {
      this.countryName = res[0].name;
      console.log(this.countryName);
    }, error => {
      this.error = error;
      console.log(this.error);
      if (this.error.Message) {
        this.errorHandling('Message', this.error.Message);
      } else {
        this.errorHandling('Error', this.error.Error);
      }
    });
    this.countryCode = '+' + code;
  }

  onSubmit() {
    console.log();
    console.log(this.myForm.value);

    if (this.myForm.value.password !== this.myForm.value.confirm_password) {
      console.log('Error in password');
      this.notMatched = true;
    } else {
      console.log('Password same');
      this.route.navigate(['/login']);
    }
    const jsonCreation = {
      email: this.myForm.value.email,
      name: this.myForm.value.name,
      phone: this.countryCode + this.myForm.value.phone,
      password: this.myForm.value.password,
      confirm_password: this.myForm.value.confirm_password,
      countryname: this.countryName,
      date: this.myForm.value. date,
    };

    this.service.gettingtReisterFormData(jsonCreation);
    console.log(jsonCreation);
  }
  errorHandling(value, Error) {
    Swal.fire({
      title: value,
      text: Error,
      allowEscapeKey: false,
      allowOutsideClick: false,
      // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
    }).then(function(value) {
      location.reload();
    });
  }

}
