import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";



export const PasswordValidator: ValidatorFn = (ctrl: AbstractControl): ValidationErrors | null => {
    const password = ctrl.get('password');
    const confirm = ctrl.get('confirm');

    console.log('validator');

    if(password?.value !== confirm?.value) {
        return {
            passwordMismatch: true
        }
    }

    return null;
}