import { Component, Input } from '@angular/core';

@Component({
    selector: 'add-button, fa-button',
    template: `
        <button type="button" class="btn btn-primary btn-circle btn-xl" [disabled]="disabledValue" [title]="Dodaj">
            <mat-icon>add</mat-icon>
        </button>`,
    styleUrls: ['add-button.component.scss']
})
export class AddButtonComponent {
    @Input() title: string;
    @Input() icon: string = 'fa-plus';
    @Input() iconSize: string = 'inherit';
    @Input() disabledValue = false;
}
