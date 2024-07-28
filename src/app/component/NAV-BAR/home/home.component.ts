import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataAPIServiceService } from 'src/app/service/data-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private data: DataAPIServiceService) {
    this.data.getJSON().subscribe(res => {
      console.log(res, "res")
    })
  }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })

  onSubmit() {
    console.warn(this.profileForm.value);
  }
  onDelete() {
    console.warn('delete');
  }
  onEdit() {
    console.warn('delete');
  }

}
