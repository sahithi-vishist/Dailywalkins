import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { PanelModel } from './panel.model';

@Injectable({
    providedIn:'root'
})

export class PanelService{
    private obj=new PanelModel();
    constructor(private http:HttpClient){}
    saveData(obj:PanelModel){
        return this.http.post('http://localhost:62222/CandidatePanelCreation',obj);
    }
    getData(){
        return this.http.get('http://localhost:62222/CandidatePanelCreation1');
    }
    deletedata(panelId){
        return this.http.delete('http://localhost:62222/DeleteCandidatePanelCreation?id='+panelId);
    }
    putData(obj:PanelModel){
        return this.http.put('http://localhost:62222/updateCandidatePanelCreation',obj);
    }
    setter(obj:PanelModel){
        this.obj=obj;
    }
    getter(){
        return this.obj;
    }
}