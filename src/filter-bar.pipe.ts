import { Injectable, PipeTransform, Pipe } from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'ngFilterBarPipe'
})
@Injectable()
export class NGFilterBarPipe implements PipeTransform {
  transform(value: any, args: any[] = null): string {
    return value;
  }
}
