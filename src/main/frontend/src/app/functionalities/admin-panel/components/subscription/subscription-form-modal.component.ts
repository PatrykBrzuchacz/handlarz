import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form" class="d-flex flex-column justify-content-center align-items-center">
      <mat-form-field>
        <input matInput type="text" formControlName="name" placeholder="Nazwa">
        <mat-error *ngIf="form.controls['name'].hasError('required')">
          Pole jest <strong>wymagane</strong>
        </mat-error>
      </mat-form-field>

      <mat-form-field>
        <input matInput type="number" formControlName="price" placeholder="Cena">
        <span matPrefix>PLN&nbsp;</span>

        <mat-error *ngIf="form.controls['price'].hasError('required')">
          Pole jest <strong>wymagane</strong>
        </mat-error>
      </mat-form-field>

      <mat-form-field>
        <input matInput type="number" formControlName="fromOrders" placeholder="Od zamówień" (keypress)="numberOnly($event)">
        <mat-error *ngIf="form.controls['fromOrders'].hasError('required')">
          Pole jest <strong>wymagane</strong>
        </mat-error>
      </mat-form-field>

      <mat-form-field>
        <input matInput type="number" formControlName="toOrders" placeholder="Do zamówień" (keypress)="numberOnly($event)">
        <mat-error *ngIf="form.controls['toOrders'].hasError('required')">
          Pole jest <strong>wymagane</strong>
        </mat-error>
      </mat-form-field>

      <button mat-raised-button color="primary" class="mt-2" (click)="onSaveClick()">Zapisz</button>
    </form>
  `,
  styles: [`
    mat-form-field {
      width: 100%
    }`]
})

export class SubscriptionFormModalComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<SubscriptionFormModalComponent>,
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
      name: [null, Validators.required],
      price: [null, Validators.required],
      fromOrders: [null, Validators.required],
      toOrders: [null, Validators.required]
    });
  }

  onSaveClick() {
    this.dialogRef.close(this.form.getRawValue());
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }
}

