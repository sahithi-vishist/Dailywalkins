import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-modifysearch',
  templateUrl: './modifysearch.component.html',
  styleUrls: ['./modifysearch.component.css']
})
export class ModifysearchComponent implements OnInit {
  
 modifyForm:FormGroup;

        constructor(private service:RecruiterauthserviceService,private router:Router,private sharedService:SharedServiceService,
          private _fb:FormBuilder) {
         
        }

 
           ngOnInit() {
           this.modifyForm=this._fb.group({
             Keywords:new FormControl('',Validators.required),
             Location:new FormControl('',Validators.required),
           skills:new FormControl('',Validators.required),
           education:new FormControl('',Validators.required),
           minExp:new FormControl('',Validators.required),
           maxExp:new FormControl('',Validators.required),
           industry:new FormControl('',Validators.required),
           role:new FormControl('',Validators.required),
           jobType:new FormControl('',Validators.required)
           
           })
           
            }
           
          modifySearch(){

          }
          }