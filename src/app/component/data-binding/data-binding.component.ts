import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  stirngInterpolation: string = "string Interpolation Implementated here";
  imageUrl: string = "assets\Lamborghini-Logo-Wallpaper-014.jpg"
  propertyBinding: string = "property binding is intializied";
  variable: string = "default title value";
  alterText: boolean = false;
  text="two way data binding"
  public data!:string;

  eventBinding() {
    this.alterText = !this.alterText;
    if (this.alterText) {
      this.variable = "first title"
    }
    else {
      this.variable = "second title"
    }
  }

}
