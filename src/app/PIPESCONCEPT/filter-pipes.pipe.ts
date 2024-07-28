import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipes'
})
export class FilterPipesPipe implements PipeTransform {

  transform(value: number,totalMarks:number,decimalAllowed:number) {
    console.log("percentage pipe is called!!")
    return (value/totalMarks *100).toFixed(decimalAllowed);
  }

}
