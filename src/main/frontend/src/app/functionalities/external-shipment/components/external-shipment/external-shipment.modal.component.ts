import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../product/components/product.service';
import {AuthService} from '../../../../core/service';
import {ProductDto} from '../../../../core/api-models';

@Component({
  template: `
    <form [formGroup]="form" class="d-flex flex-column justify-content-center align-items-center">
      <div class="row">

        <mat-form-field appearance="fill" class="col-sm-12">
          <mat-label>Produkt</mat-label>
          <mat-select formControlName="product" [compareWith]="compareByValue">
            <mat-option *ngFor="let product of products" [value]="product">
              {{product.name}}
            </mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field class="col-sm-6">
          <input matInput type="text" formControlName="amount" placeholder="Ilość">
          <mat-error *ngIf="form.controls['amount'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>


        <mat-form-field class="col-sm-6">
          <input matInput type="number" formControlName="price" placeholder="Cena za sztukę">
          <mat-error *ngIf="form.controls['price'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="fill" class="col-sm-6">
          <mat-label>Data przyjęcia</mat-label>
          <input matInput [matDatepicker]="picker" disabled formControlName="issueDate">
          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
          <mat-datepicker #picker disabled="false"></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="fill" class="col-sm-6">
          <mat-label>Data wydania</mat-label>
          <input matInput [matDatepicker]="picker2" disabled formControlName="admissionDate">
          <mat-datepicker-toggle matSuffix [for]="picker2"></mat-datepicker-toggle>
          <mat-datepicker #picker2 disabled="false"></mat-datepicker>
        </mat-form-field>
      </div>

      <button mat-raised-button color="primary" class="mt-2" (click)="onSaveClick()">Zapisz</button>
    </form>
  `
})

export class ExternalShipmentModalComponent implements OnInit {
  form: FormGroup;
  products: ProductDto[] = [];

  constructor(public dialogRef: MatDialogRef<ExternalShipmentModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.productService.getAllUnpaged().subscribe(it => {
      this.products = it;
    });

    this.initForm();
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  initForm() {
    this.form = this.fb.group({
      id: null,
      product: [null, Validators.required],
      price: [null, Validators.required],
      amount: [null, Validators.required],
      issueDate: [null, Validators.required],
      admissionDate: [null, Validators.required],
    });
  }

  onSaveClick() {
    this.form.valid && this.dialogRef.close(this.form.getRawValue());
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  compareByValue(f1: any, f2: any) {
    return f1 && f2 && f1.name === f2.name;
  }

}

