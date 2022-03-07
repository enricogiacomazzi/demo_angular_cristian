import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public usernameRgx: RegExp = /^\w{4,}\d{2}$/; 

  public formData: FormValue = {
    name: '',
    surname: 'rossi',
    email: "ciao@prova.it",
    username: 'pippo666',
    gender: '',
    business: false,
    vatNumber: ''
  }

  public genders: Array<Gender> = [
    {value: 'M', label: 'Maschio'},
    {value: 'F', label: 'Femmina'},
    {value: 'N', label: 'Non binario'},
    {value: 'R', label: 'Robot'},
  ]

  
  public save(form: NgForm): void {
    if(form.valid) {
      console.log('save', form);
    } else {
      for (const k in form.controls) {
        form.controls[k].markAsTouched();
      }
    }
  }

  public change(): void {
    this.formData.name = "pietro";
  }


}

interface Gender {
  value: string;
  label: string;
}

interface FormValue {
  name: string;
  surname: string;
  email: string;
  username: string;
  gender: string;
  business: boolean;
  vatNumber: string;
}
