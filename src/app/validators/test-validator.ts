import { AbstractControl, ControlContainer } from '@angular/forms';

export function TestValidator(control: AbstractControl): { [key: string]: boolean } {
    return control.value !== 'toto' ? null : { test: true };
}