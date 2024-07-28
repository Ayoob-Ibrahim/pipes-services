import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  profileForm: FormGroup = new FormGroup({});;
  myForm: FormGroup;
  constructor(private FormBuilder: FormBuilder) {
    this.myForm = this.FormBuilder.group({
      myArray: this.FormBuilder.array([])
    });
  }
  // new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });


  ngOnInit(): void {
    this.profileForm = this.FormBuilder.group({
      firstName: [''],
      lastName: [''],
      address: this.FormBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      aliases: this.FormBuilder.array([
        this.FormBuilder.control('')
      ])
    })

  }

  //profile form


  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    console.log("alias")
    this.aliases.push(this.FormBuilder.control(''));

  }

  test() {
    console.log("test");
    console.warn(this.profileForm.value);
  }

  // myform


  get myArray(): FormArray {
    return this.myForm.get('myArray') as FormArray;
  }

  addItem() {
    this.myArray.push(this.FormBuilder.control(''));
  }

  removeItem(index: number) {
    this.myArray.removeAt(index);
  }


  // aliases() {
  //   return this.profileForm.get('aliases') as FormArray;
  // }
}
