import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postwalkin',
  templateUrl: './postwalkin.component.html',
  styleUrls: ['./postwalkin.component.css']
})
export class PostwalkinComponent implements OnInit {
vm={
  jobtitle:'',
  date:'',
  timeslot:'',
  minexp:'',
  maxexp:'',
  wlocation:'',
  induatryname:'',
  role:'',
  jpostions:'',
  jobskills:'',
  jdescription:'',
  Designation:'',
  noticeperiod:'',
  jobtype:'',  
  qualification:'',
  minsal:'',
  maxsal:'',
  companyname:'',
  EndClient:'',
  clocation:'',
  clocality:'',
  cprofile:'',
  email:'',
  cperson:'',
  cno:'',
  clno:'',
  roleres:'',
  vdetails:'',
  check1:'',
  check2:'',
  check3:'',
  check4:'',
  file:''
};
post(val){
  console.log(val);
}
  constructor() { }
  changeClientName(){

  }
  chkRequireFPanel(){

  }
  chkFSpace(){

  }
  chkFResource(){

  }
  chkFTP(){
    
  }
  createWalkin(){

  }
  ngOnInit() {
  }

}
