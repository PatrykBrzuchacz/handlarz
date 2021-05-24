import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form" class="d-flex flex-column justify-content-center align-items-center">
      <div class="row">

        <mat-form-field class="col-sm-6">
          <input matInput type="text" formControlName="firstName" placeholder="Imię">
          <mat-error *ngIf="form.controls['firstName'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>

        <mat-form-field class="col-sm-6">
          <input matInput type="text" formControlName="lastName" placeholder="Nazwisko">
          <mat-error *ngIf="form.controls['lastName'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>


        <mat-form-field class="col-sm-6">
          <input matInput type="text" formControlName="companyName" placeholder="Nazwa firmy">
          <mat-error *ngIf="form.controls['companyName'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>

        <mat-form-field class="col-sm-6">
          <input matInput type="number" formControlName="nip" placeholder="NIP" (keypress)="numberOnly($event)">
          <mat-error *ngIf="form.controls['nip'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>

        <mat-form-field class="col-sm-4">
          <input matInput type="text" formControlName="city" placeholder="Miasto">
          <mat-error *ngIf="form.controls['city'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>

        <mat-form-field class="col-sm-4">
          <input matInput type="text" formControlName="street" placeholder="Ulica">
        </mat-form-field>

        <mat-form-field class="col-sm-4">
          <input matInput type="text" formControlName="streetNumber" placeholder="Numer ulicy">
        </mat-form-field>

        <mat-form-field class="col-sm-4">
          <input matInput type="text" formControlName="houseNumber" placeholder="Numer domu">
          <mat-error *ngIf="form.controls['houseNumber'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>

        <mat-form-field class="col-sm-4">
          <input matInput type="number" formControlName="phoneNumber" placeholder="Numer telefonu" (keypress)="numberOnly($event)">
          <mat-error *ngIf="form.controls['phoneNumber'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>

        <mat-form-field class="col-sm-4">
          <input matInput type="text" formControlName="email" placeholder="Email">
          <mat-error *ngIf="form.controls['email'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>

      </div>

      <button mat-raised-button color="primary" class="mt-2" (click)="onSaveClick()">Zapisz</button>
    </form>
  `,
  styles: [`
    mat-form-field {
      width: 100%
    }`]
})

export class RegularClientFormModal implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<RegularClientFormModal>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  initForm() {
    this.form = this.fb.group({
      id: null,
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      nip: [null, Validators.required],
      city: [null, Validators.required],
      street: [null],
      streetNumber: [null],
      houseNumber: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      email: [null, Validators.required],
      companyName: [null, Validators.required],
    });
  }

  onSaveClick() {
    this.form.valid && this.dialogRef.close(this.form.getRawValue());
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }
}

