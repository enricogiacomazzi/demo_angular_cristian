import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";



export const MyValidator: ValidatorFn = (ctrl: AbstractControl): ValidationErrors | null => {
    const value = ctrl.value as string;
    if(!value.startsWith('ciao')) {
        return null;
    }

    return {
        'notCiao': true
    }
}