import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToFunction',
  standalone: true,
})
export class MapFunctionPipe<T> implements PipeTransform {
  transform(value: unknown, functionToMap: Function): T {
    return functionToMap(value);
  }
}
