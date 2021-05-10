import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form" class="d-flex flex-column justify-content-center align-items-center">
      <div class="row">

        <mat-form-field class="col-sm-6">
          <input matInput type="text" formControlName="name" placeholder="Nazwa">
          <mat-error *ngIf="form.controls['name'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>

        <mat-form-field class="col-sm-6">
          <input matInput type="text" formControlName="manufacturer" placeholder="Producent">
          <mat-error *ngIf="form.controls['manufacturer'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>


        <mat-form-field class="col-sm-6">
          <input matInput type="number" formControlName="price" placeholder="Cena">
          <mat-error *ngIf="form.controls['price'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>

        <mat-form-field class="col-sm-6">
          <input matInput type="number" formControlName="vat" placeholder="Vat">
          <mat-error *ngIf="form.controls['vat'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>

        <mat-form-field class="col-sm-6">
          <input matInput type="text" formControlName="ean" placeholder="Kod kreskowy">
          <mat-error *ngIf="form.controls['ean'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>

        <mat-form-field class="col-sm-6">
          <input matInput type="text" formControlName="sku" placeholder="Kod magazynowy">
          <mat-error *ngIf="form.controls['sku'].hasError('required')">
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

export class ProductFormModalComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<ProductFormModalComponent>,
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
      manufacturer: [null, Validators.required],
      price: [null, Validators.required],
      ean: [null, Validators.required],
      sku: [null, Validators.required],
      vat: [null, Validators.required]
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

