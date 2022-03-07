import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'fahrenheit'
})
export class FahrenheitPipe implements PipeTransform {
    transform(value: number | null) {
        if(value === null) {
            return 0;
        }
        
        return value * 1.8 + 32;
    }
}