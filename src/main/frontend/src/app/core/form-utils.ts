import { FormGroup } from '@angular/forms';


export class FormUtils {
    public static markAllFormControlsAsDirtyAndTouched(form: FormGroup) {
        Object.keys(form.controls).map(prop => form.controls[prop]).filter(c => !!c).forEach(control => {
            control.markAsTouched();
            control.markAsDirty();
            if (control['controls']) {
                this.markAllFormControlsAsDirtyAndTouched(control as FormGroup);
            }
        });
    }
}
