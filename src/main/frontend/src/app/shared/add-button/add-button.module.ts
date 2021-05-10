import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from './add-button.component';
import { MatIconModule } from '@angular/material';


@NgModule({
    declarations: [
        AddButtonComponent
    ],
    imports: [
        CommonModule,
      MatIconModule
    ],
    exports: [
        AddButtonComponent
    ]
})
export class AddButtonModule {
}
