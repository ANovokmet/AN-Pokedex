import { Pipe, PipeTransform } from '@angular/core';

/**
 * Transforms kebab-case strings to space delimited string.
 */
@Pipe({
    name: 'deKebabCase'
})
export class DeKebabCasePipe implements PipeTransform {

    transform(value: string, args?: any): any {
        const result = value.charAt(0).toUpperCase() + value.slice(1);
        return result.replace('-', ' ');
    }

}
