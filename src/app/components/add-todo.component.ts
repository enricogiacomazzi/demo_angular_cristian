import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";



@Component({
    selector: 'app-add-todo',
    template: `
        <form #frm="ngForm" (submit)="sub(frm)">
            <input type="text" ngModel name="pippo" required minlength="6" placeholder="inserisci"/>
            <button type="submit">aggiungi</button>
        </form>
    `
})
export class AddTodo {
    @Output() addTodo = new EventEmitter<string>();

    // public btnClick(value: HTMLInputElement | undefined = undefined): void {
    //     this.addTodo.emit(this.txtValue);
    //     this.txtValue = "";
    // }

    public sub(e: NgForm) {
        if (e.valid) {
            this.addTodo.emit(e.form.value.pippo);
            e.form.reset();
        }
    }
}


// @Component({
//     selector: 'app-add-todo',
//     template: `
//         <input #txt type="text"/>
//         <button (click)="btnClick(txt)">aggiungi</button>
//     `
// })
// export class AddTodo {
//     @Output() addTodo = new EventEmitter<string>();

//     public btnClick(value: HTMLInputElement): void {
//         this.addTodo.emit(value.value);
//     }
// }