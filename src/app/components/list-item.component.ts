import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, AfterViewInit, OnChanges, SimpleChanges, OnDestroy } from "@angular/core";
import { Todo } from "../models/todo.model";

@Component({
    selector: 'app-list-item',
    template: `
        <li>
            <button (click)="onCompletedClick.emit(item.id)">
                <i [ngClass]="{'fa': true, 'fa-times': !item?.completed, 'fa-check': item?.completed}"></i>
            </button>
            <button (click)="onDeleteClick.emit(item.id)">
                <i class="fa fa-trash"></i>
            </button>
            <span [ngClass]="{'completato': item.completed}"
                  (click)="onEditClick.emit(item.id)">
            {{item?.label}}
            </span>
        </li>
    `,
    styles: [`
        .completato {text-decoration: line-through;}
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItem implements OnInit, AfterViewInit, OnChanges, OnDestroy {

    @Input() item!: Todo;
    @Output() onCompletedClick = new EventEmitter<number>();
    @Output() onDeleteClick = new EventEmitter<number>();
    @Output() onEditClick = new EventEmitter<number>();


    ngOnInit(): void {
        console.log(this.item);
    }

    ngAfterViewInit(): void {
        // throw new Error("Method not implemented.");
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('item change', changes['item']);
    }

    ngOnDestroy(): void {
        console.log('componente distrutto');
    }
}