import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProductService} from '../../../product/components/product.service';
import {RegularClientService} from '../../../regular-client/regular-client.service';
import {FormUtils} from '../../../../core/form-utils';

@Component({
  template: `
    <form [formGroup]="form" class="d-flex flex-column justify-content-center align-items-center">
      <div class="row mb-3 mt-1" style="width: 99%">
        <mat-form-field class="col-sm-12">
          <mat-label>Klient</mat-label>
          <mat-select formControlName="client" [compareWith]="compareByFullName">
            <mat-option *ngFor="let client of clients" [value]="client">
              {{client.firstName + ' ' + client.lastName}}
            </mat-option>
          </mat-select>
          <mat-error *ngIf="form.controls['client'].hasError('required')">
            Pole jest <strong>wymagane</strong>
          </mat-error>
        </mat-form-field>
        <div [formGroup]="clientForm">
          <mat-form-field class="col-sm-6">
            <input matInput type="text" formControlName="firstName" placeholder="Imię">
            <mat-error *ngIf="clientForm.controls['firstName'].hasError('required')">
              Pole jest <strong>wymagane</strong>
            </mat-error>
          </mat-form-field>

          <mat-form-field class="col-sm-6">
            <input matInput type="text" formControlName="lastName" placeholder="Nazwisko">
            <mat-error *ngIf="clientForm.controls['lastName'].hasError('required')">
              Pole jest <strong>wymagane</strong>
            </mat-error>
          </mat-form-field>


          <mat-form-field class="col-sm-6">
            <input matInput type="text" formControlName="companyName" placeholder="Nazwa firmy">
            <mat-error *ngIf="clientForm.controls['companyName'].hasError('required')">
              Pole jest <strong>wymagane</strong>
            </mat-error>
          </mat-form-field>

          <mat-form-field class="col-sm-6">
            <input matInput type="number" formControlName="nip" placeholder="NIP" (keypress)="numberOnly($event)">
            <mat-error *ngIf="clientForm.controls['nip'].hasError('required')">
              Pole jest <strong>wymagane</strong>
            </mat-error>
          </mat-form-field>

          <mat-form-field class="col-sm-4">
            <input matInput type="text" formControlName="city" placeholder="Miasto">
            <mat-error *ngIf="clientForm.controls['city'].hasError('required')">
              Pole jest <strong>wymagane</strong>
            </mat-error>
          </mat-form-field>

          <mat-form-field class="col-sm-4">
            <input matInput type="text" formControlName="street" placeholder="Ulica">
            <mat-error *ngIf="clientForm.controls['street'].hasError('required')">
              Pole jest <strong>wymagane</strong>
            </mat-error>
          </mat-form-field>

          <mat-form-field class="col-sm-4">
            <input matInput type="text" formControlName="streetNumber" placeholder="Numer ulicy">
            <mat-error *ngIf="clientForm.controls['streetNumber'].hasError('required')">
              Pole jest <strong>wymagane</strong>
            </mat-error>
          </mat-form-field>

          <mat-form-field class="col-sm-4">
            <input matInput type="text" formControlName="houseNumber" placeholder="Numer domu">
            <mat-error *ngIf="clientForm.controls['houseNumber'].hasError('required')">
              Pole jest <strong>wymagane</strong>
            </mat-error>
          </mat-form-field>

          <mat-form-field class="col-sm-4">
            <input matInput type="number" formControlName="phoneNumber" placeholder="Numer telefonu" (keypress)="numberOnly($event)">
            <mat-error *ngIf="clientForm.controls['phoneNumber'].hasError('required')">
              Pole jest <strong>wymagane</strong>
            </mat-error>
          </mat-form-field>

          <mat-form-field class="col-sm-4">
            <input matInput type="text" formControlName="email" placeholder="Email">
            <mat-error *ngIf="clientForm.controls['email'].hasError('required')">
              Pole jest <strong>wymagane</strong>
            </mat-error>
          </mat-form-field>
        </div>

        <mat-divider></mat-divider>
        <mat-form-field class="col-sm-6">
          <mat-label>Data stworzenia</mat-label>
          <input matInput [matDatepicker]="picker2" disabled formControlName="createdDate">
          <mat-datepicker #picker2 disabled="false"></mat-datepicker>
        </mat-form-field>


        <mat-form-field class="col-sm-6">
          <input matInput type="number" formControlName="price" placeholder="Cena">
        </mat-form-field>
      </div>

      <div formArrayName="products" style="width: 95%">
        <mat-card class="sub-header">
          <div class="d-flex  flex-column">
            <div class="d-flex justify-content-between">
              Produkty
              <mat-icon *ngIf="!disabled" (click)="addProducts()" class="add-circle mb-2">add_circle</mat-icon>
            </div>

            <div *ngFor="let pf of productsForm.controls; let i = index">
              <div [formGroup]="pf" class="row">

                <mat-form-field class="col-sm-7">
                  <mat-label>Produkt</mat-label>
                  <mat-select formControlName="product" [compareWith]="compareByValue">
                    <mat-option *ngFor="let product of products" [value]="product">
                      {{product.name}}
                    </mat-option>
                  </mat-select>
                  <mat-error *ngIf="pf.hasError('required')">
                    Pole jest <strong>wymagane</strong>
                  </mat-error>
                </mat-form-field>

                <mat-form-field class="col-sm-4">
                  <input matInput type="number" formControlName="amount" placeholder="Ilość" (keypress)="numberOnly($event)">
                  <mat-error *ngIf="pf.hasError('required')">
                    Pole jest <strong>wymagane</strong>
                  </mat-error>
                </mat-form-field>

                <div class="col-sm-1 d-flex justify-content-center align-items-center" *ngIf="!disabled">
                  <mat-icon (click)="deleteProduct(i)" class="deletesweep">delete_sweep</mat-icon>
                </div>
              </div>
            </div>
          </div>
        </mat-card>


      </div>

      <button mat-raised-button color="primary" class="mt-2" *ngIf="!disabled" (click)="onSaveClick()">Zapisz</button>
      <button mat-raised-button color="primary" class="mt-2" *ngIf="disabled" (click)="close()">Zamknij</button>
    </form>
  `,
  styleUrls: ['./invoice.modal.component.scss']
})

export class InvoiceModalComponent implements OnInit {
  form: FormGroup;
  clientForm: FormGroup;
  products = [];
  clients = [];
  disabled: boolean;

  constructor(public dialogRef: MatDialogRef<InvoiceModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private productService: ProductService,
              private clientService: RegularClientService
  ) {
  }

  ngOnInit(): void {
    this.productService.getAllUnpaged().subscribe(it => {
      this.products = it;
    });

    this.clientService.getAllUnpaged().subscribe(it => {
      this.clients = it;
    });

    this.initForm();
    if (this.data) {
      this.form.patchValue(this.data.order);
      this.form.disable();
      this.disabled = true;
    }
  }

  initForm() {
    this.form = this.fb.group({
      products: this.fb.array([]),
      client: [null, Validators.required],
      price: null,
      createdDate: null
    });

    this.clientForm = this.fb.group({
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

    this.form.controls.client.valueChanges.subscribe(it => {
      if (it) {
        this.clientForm.patchValue(it);
        this.clientForm.disable();
      } else {
        this.clientForm.reset();
        this.clientForm.enable();
      }
    });

    this.addProducts();
  }

  onSaveClick() {
    if (this.clientForm.valid && !this.form.value.client) {
      this.form.controls.client.setValue(this.clientForm.getRawValue());
    }
    FormUtils.markAllFormControlsAsDirtyAndTouched(this.form);
    FormUtils.markAllFormControlsAsDirtyAndTouched(this.clientForm);
    this.form.valid && (this.clientForm.status === 'DISABLED' || this.clientForm.valid) && this.dialogRef.close(this.form.getRawValue());
  }

  close() {
    this.dialogRef.close();
  }

  get productsForm() {
    return this.form.get('products') as FormArray;
  }

  addProducts() {
    this.productsForm.push(this.getProductForm());
  }

  deleteProduct(index: number) {
    this.productsForm.length > 1 && this.productsForm.removeAt(index);
  }

  private getProductForm() {
    const productForm = this.fb.group({
      amount: [null, Validators.required],
      product: [null, Validators.required]
    });

    return productForm;
  }

  compareByValue(f1: any, f2: any) {
    return f1 && f2 && f1.name === f2.name;
  }

  compareByFullName(f1: any, f2: any) {
    return f1 && f2 && f1.firstName === f2.firstName && f1.lastName === f2.lastName;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }
}

