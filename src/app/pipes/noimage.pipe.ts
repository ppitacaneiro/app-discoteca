import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: any, args?: any): any {

    if (!image) {
      return 'assets/images/noimage.png';
    }

    if (image.includes("http")) {
      return image;
    } else { 
      return 'assets/images/noimage.png';
    }
  }

}
