import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advancesearch',
  templateUrl: './advancesearch.component.html',
  styleUrls: ['./advancesearch.component.css']
})
export class AdvancesearchComponent implements OnInit {
vm={
  Keywords:'',
  skills:'',
  exskills:'',
  location:'',
  preflocation:'',
  exp:'',
  maxExp:'',
  industryname:'',
  role:'',
  degree:'',
  period:''
};
  constructor() { }
  submitForm(val){
    console.log(val);
  }
  checkboxAll(){
    document.getElementById('chkAll').hidden=true;
  }
  checkboxResume(){
    document.getElementById('chkResume').hidden=true;
  }
  ngOnInit() {
  }

}
