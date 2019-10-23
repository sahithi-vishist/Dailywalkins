import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WalkerAuthService } from '../walker-auth.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  regForm: FormGroup;
  profileImage: File;
  image;
  displayImage;
  sanitizer: any;
  constructor(private service: WalkerAuthService) { }

  ngOnInit() {
    this.regForm = new FormGroup({
      photo: new FormControl('', Validators.required)
    })


  }
  onSubmit() {
    const formData = new FormData();
    formData.append('fileName', this.profileImage)
    console.log(formData.get('fileName'))
    this.service.upload(formData).subscribe((res:any) => {
      this.image=res;
console.log(this.image);

    })
    console.log(this.regForm.value)
  }
  selectProfileImage(event) {
    this.profileImage = event.target.files[0];
    console.log(this.profileImage)
  }

}
