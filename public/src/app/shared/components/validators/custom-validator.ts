
import { FormControl, FormGroup } from '@angular/forms';

/**
 * Custom validator
 */
export class CustomValidator {

    static noWhitespaceValidator(control: FormControl) {
        let isWhitespace = false;
        if (control.value !== '') {
            isWhitespace = (control.value || '').trim().length === 0;
        }
        const isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    }

    // custom validator to check that two fields match
    static MustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }

            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: { message: 'Password and confirmation password do not match.' } });
            } else {
                matchingControl.setErrors(null);
            }
        };
    }
}
