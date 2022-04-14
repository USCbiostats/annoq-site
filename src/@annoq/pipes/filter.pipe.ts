import { Pipe, PipeTransform } from '@angular/core';
import { AnnoqUtils } from '../utils/annoq-utils';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
    transform(mainArr: any[], searchText: string, property: string): any {
        return AnnoqUtils.filterArrayByString(mainArr, searchText);
    }
}
