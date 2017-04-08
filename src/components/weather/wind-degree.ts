import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'windDegree' })
export class windDegreePipe implements PipeTransform {
    transform(degree: number) {
        // console.log('windDegree Pipe', degree);
        let val = Math.trunc((degree / 22.5) + 0.5);
        let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
        return arr[(val % 16)];
    }
}