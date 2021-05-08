import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatCheckboxModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatSliderModule,
  MatToolbarModule,
  MatSidenavModule,
  MatAutocompleteModule,


} from '@angular/material';

import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
  exports: [
    CommonModule,
    MatAutocompleteModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    RouterModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule,
    MatSliderModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    ToastrModule
  ]
})
export class SharedModule {
}
