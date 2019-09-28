import { Injectable } from "@angular/core";
import { HomeModel } from './homepage.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class HomepageService{
    private obj= new HomeModel();


constructor(private http:HttpClient){}

saveCo(obj:HomeModel){
    return this.http.post('http://localhost:62222/saveCoordinatorDetails',obj);
}
getCo(){
    return this.http.get('http://localhost:62222/getCoordinatorDetails');
}
deleteCo(coordinatorId){
    return this.http.delete('http://localhost:62222/deleteCoordinatorDetails?coordinatorId='+coordinatorId);
}
updateCo(obj:HomeModel){
    return this.http.put('http://localhost:62222/putCo',obj);
}
setter(obj:HomeModel){
    this.obj=obj;
}
getter()
{
    return this.obj;
}
}