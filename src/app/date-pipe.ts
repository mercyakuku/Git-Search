import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'datePipe'
  })


export class DatePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
        return 'Just now';
      const intervals = {
        'year': 31536000,
        'month': 2592000,
        'week': 604800,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0)
          if (counter === 1) {
            return counter + ' ' + i + ' ago'; // singular (1 day ago)
          } else {
            return counter + ' ' + i + 's ago'; // plural (2 days ago)
          }
      }
    }
    return value;
  }
  
}
   
  
  // transform(value: any): any {
  //   let valueArr = value.replace(/(\d{4})-(\d{2})-(\d{2}).*/ig,"$1 $2 $3").split(" ");
  //   let dateCreated = new Date(valueArr[0],valueArr[1]-1, valueArr[2]);
  //   let now = new Date() ;
  //   let diff = now.getTime() - dateCreated.getTime();
  //   diff/=(1000 * 60 * 60 * 24);
  //   return Math.floor(diff);
  // }

  // transform(value: any, args?: any): any {
  //   	return null;
  // 	}

