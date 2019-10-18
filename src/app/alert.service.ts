import { Injectable } from '@angular/core';
import Swal from'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
showAlert(messageType,message){
  Swal.fire({
    position: 'top-end',
    type: messageType,
    title: message,
    showConfirmButton:true,
    timer: 4000
  })
}
  constructor() { }
}
