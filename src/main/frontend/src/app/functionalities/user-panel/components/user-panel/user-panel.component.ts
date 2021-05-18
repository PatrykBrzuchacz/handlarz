import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/service';
import {UserService} from '../../../../shared/service/user.service';
import {SubscriptionDto} from '../../../../core/api-models';
import {SubscriptionService} from '../../../admin-panel/components/subscription/subscription.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  loading = true;
  form: FormGroup;
  subscriptions: SubscriptionDto[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private subscriptionService: SubscriptionService,
    private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.initForm();

    this.userService.getLoggedUserDetails().subscribe(it => {
      this.loading = false;
      this.form.patchValue(it);
      this.form.controls.username.disable();
    console.log(this.form);
    });

    this.subscriptionService.getAll().subscribe(it => this.subscriptions = it);
  }

  initForm() {
    this.form = this.fb.group({
      id: null,
      username: [null],
      nip: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      companyName: [null, Validators.required],
      houseNumber: [null],
      city: [null, Validators.required],
      streetNumber: [null],
      phoneNumber: [null, Validators.required],
      subscriptionDto: [null, Validators.required],
      street: [null]
    });
  }

  onSaveClick() {
    if (this.form.valid) {

      this.loading = true;
      this.userService.updateDetails(this.form.getRawValue()).subscribe(it => {
        this.toastrService.success('Profil użytkownika został zaktualizowany.');
        this.loading = false;
      });
    }

  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }
  compareByValue(f1: any, f2: any) {
    return f1 && f2 && f1.name === f2.name;
  }
}
