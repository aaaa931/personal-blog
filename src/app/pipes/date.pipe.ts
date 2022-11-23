import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twDate'
})
export class DatePipe implements PipeTransform {

  transform(date: number): string {
    const d = new Date(date + 8 * 3600 * 1000).toISOString().replace("T", " ").substring(0, 16);
    return d;
  }
}
