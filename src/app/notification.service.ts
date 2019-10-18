import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  showNotification(messageType, message) {
   
      Swal.fire({
        position: 'top',
        type: messageType,
        title: message,
        showConfirmButton: true,
        timer: 3000
      })
}

}
