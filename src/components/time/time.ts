import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'timeFromatter' })
export class timePipe implements PipeTransform {
    transform(timeStr: String, format) {
        let hour = parseInt(timeStr.split(":")[0]);
        let minute = parseInt(timeStr.split(":")[1]);
        return moment(hour + '/' + minute, 'H/mm').format(format)
    }
}