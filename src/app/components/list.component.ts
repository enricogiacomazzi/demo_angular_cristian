import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { Todo } from "../models/todo.model";



@Component({
    selector: 'app-list',
    template: `
        <ul>
            <app-list-item 
                *ngFor="let gino of items"
                [item]="gino"
                (onCompletedClick)="onCompletedClick.emit($event)"
                (onDeleteClick)="onDeleteClick.emit($event)"
                (onEditClick)="onEditClick.emit($event)">
            </app-list-item>
        </ul>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class List {
    @Input() items!: Todo[];
    @Output() onCompletedClick = new EventEmitter<number>();
    @Output() onDeleteClick = new EventEmitter<number>();
    @Output() onEditClick = new EventEmitter<number>();
}