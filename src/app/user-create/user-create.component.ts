import { Component, OnInit } from '@angular/core';
import { User } from '../data/user';
import { NgForOf } from '@angular/common';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  originalUser: User = {
    name: '',
    email: 'tuniis@live.com',
    city: 'Frisco',
    subscribe: true
  };

  // the spread (...) operator to copy enumerable properties from one object to another
  user: User = { ... this.originalUser };
  showSpinner = false;
  postError = false;
  postErrorMessage = '';
  cities: Observable<string[]>;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.cities = this.dataService.getCities()
  }


  onBlur(field: NgModel): void {
    console.log('in onSubmit: ', field.valid);
  }

  onSubmit(form: NgForm): void {
    console.log('in onSubmit: ', form.valid);
    if (form.valid === true) {
      this.showSpinner = true;
      this.dataService.postUser(this.user)
      .pipe(
        finalize(() => {
          this.showSpinner = false;
        })
      )
      .subscribe(
        result => console.log('success: ', result),
        error => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please fix validation errors.';
    }
  }

  onHttpError(errorReponse: any): void {
    console.error('error: ', errorReponse);
    this.postError = true;
    this.postErrorMessage = errorReponse.error.errorMessage;
  }
}
