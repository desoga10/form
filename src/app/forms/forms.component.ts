import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  codesample = {
    'branch' : 'New Branch',
    'key' : 'any one',
    'names' : ['Azhar', 'Husain']
  };

  someCode: String = '';


  constructor() { }

  ngOnInit() {

    console.log(this.codesample , JSON.stringify(this.codesample));
    this.someCode = JSON.stringify(this.codesample);
  }

}
