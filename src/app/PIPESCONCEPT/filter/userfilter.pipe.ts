import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {

  // transform(value: any, filteredString: string) {


  //   if (value.length === 0 || filteredString === "") {
  //     console.log(value, "value")
  //     return value;
  //   }
  //   const SearchedData = [];
  //   for (const item of value) {

  //     if (item.name == filteredString) {
  //       SearchedData.push(item);

  //     }


  //   }
  //   return SearchedData;

  // }
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      for (let key in item) {
        if (item[key] != null && item[key].toString().toLowerCase().includes(searchText)) {
          return true;
        }
      }
      return false;
    });
  }
}


