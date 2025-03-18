import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { JSONPathJS } from 'jsonpath-js';
//import { JSONPath } from 'jsonpath-plus';

@Pipe({
  name: 'gJsonpath',
  standalone: true,
})
@Injectable({ providedIn: 'root' })
export class GJsonpathPipe implements PipeTransform {
  transform(json: any, path?: string): any {
    if (!path) {
      return;
    }

    //return JSONPath({ path, json });
    console.log('JSON: ', json);
    console.log('JSON PATH: ', path);

    const query = new JSONPathJS(path);
    const result = query.find(json);
    console.log('Result: ', result);
    return result;
  }
}
