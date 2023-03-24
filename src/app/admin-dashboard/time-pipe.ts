import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timepipe',
})
export class TimePipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return value;
    }

    return (value as string).substring(0, 5);
  }
}
