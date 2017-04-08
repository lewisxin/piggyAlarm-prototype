import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'temperature' })
export class temperaturePipe implements PipeTransform {
    transform(K: number, unit: String) {
        // console.log('temperature Pipe');
        switch (unit) {
            case 'c': default: return Math.round(K - 273.15);
            case 'f': Math.round(9 / 5.0 * (K - 273) + 32);
        }
    }
}