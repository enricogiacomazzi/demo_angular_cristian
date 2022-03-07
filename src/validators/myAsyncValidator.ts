import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable, of } from "rxjs";
import { ApiService } from "src/app/services/api.service";



@Injectable({
    providedIn: 'root'
})
export class MyAsyncValidator {

    constructor(private api: ApiService) {
        console.log('asyn validator chiamato');
    }

    public Validator(): AsyncValidatorFn {
        return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
            const value = control.value as string;
            return this.api.isUsernameBusy(value).pipe(
                map((busy: boolean) => {
                    if(busy) {
                        return {
                            usernameBusy: true
                        }
                    }

                    return null;
                })
            )
        }
    }
}