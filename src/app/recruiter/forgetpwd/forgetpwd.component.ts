import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgetpwd',
  templateUrl: './forgetpwd.component.html',
  styleUrls: ['./forgetpwd.component.css']
})
export class ForgetpwdComponent implements OnInit {
vm={
mails:''
};
  constructor() { }
sendform(val){
  console.log(val);
}
  ngOnInit() {
  }

}
