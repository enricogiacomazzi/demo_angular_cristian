import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, fromEvent, Observable, startWith } from 'rxjs';
import { MyAsyncValidator } from 'src/validators/myAsyncValidator';
import { MyValidator } from 'src/validators/myValidator';
import { PasswordValidator } from 'src/validators/passwordValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public tempInput = new FormControl(22);
  public temp$: Observable<number> = this.tempInput.valueChanges.pipe(startWith(this.tempInput.value));

  public form!: FormGroup;

  public get NameErrors(): boolean {
    return !!this.form.controls['nome'].errors && this.form.touched;
  }

  public get SurnameErrors(): boolean {
    return !!this.form.controls['cognome'].errors && this.form.touched;
  }

  public get UsernameErrors(): boolean {
    return !!this.form.controls['username'].errors; //  && this.form.touched;
  }

  public get Addresses(): FormArray {
    return this.form.controls['indirizzi'] as FormArray;
  }

  constructor(private fb: FormBuilder, private myAsyncValidator: MyAsyncValidator) {
    this.form = fb.group({
      'nome': ['', Validators.required],
      'cognome': ['', MyValidator],
      'username': ['', null, this.myAsyncValidator.Validator()],
      'azienda': [false],
      'piva': [''],
      'password': [''],
      'confirm': [''],
      'indirizzi': fb.array([
        fb.group({
          'via': ['via rossi 13', Validators.required],
          'cap': ['', Validators.required]
        }),
        fb.group({
          'via': ['via bianchi 22', Validators.required],
          'cap': ['', Validators.required]
        })
      ])
    }, {
      validators: [PasswordValidator]
    });

    this.form.controls['piva'].disable();
  }


  public getAddress(ctrl: AbstractControl): FormGroup {
    return ctrl as FormGroup;
  }
  
  


  ngOnInit(): void {
    this.form.valueChanges.pipe(debounceTime(4000)).subscribe(x => {
      console.log('form', x);
    });

    const name = this.form.controls['nome'] as FormControl;
    name.valueChanges.subscribe(x => console.log('nome', x));

    const company = this.form.controls['azienda'] as FormControl;
    company.valueChanges.subscribe(x => {
      const piva = this.form.controls['piva'] as FormControl;
      console.log('aaaaaa', x);
      if(x) {
        piva.setValidators([Validators.required]);
        piva.enable();
      } else {
        piva.clearValidators();
        piva.disable();
      }

      piva.updateValueAndValidity();
    });
  }


  public save() {
    if(this.form.valid) {
      console.log('save', this.form.value);
    }
    else {
      this.form.markAllAsTouched();
      console.log('form non valida', this.form.controls['nome'].errors);
    }
    
  }

  public addAddress(): void {
    this.Addresses.push(this.fb.group({
      'via': ['', Validators.required],
      'cap': ['', Validators.required]
    }));
  }


  public removeAddress(index: number): void {
    this.Addresses.removeAt(index);
  }

  // [ngClass]="{'form-control': true, 'is-invalid': label1.errors && f.touched}"
}
