import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'datePipe'
  })


export class DatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
    	return null;
  	}
}
