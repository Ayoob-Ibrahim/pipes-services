import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substrPipes'
})
export class SubstrPipesPipe implements PipeTransform {

  transform(value: any ,limit :number) {
    console.log(value, "name");
    return value.length > limit ? value.substr(0,limit) +'...' :  value ;
  }

}
