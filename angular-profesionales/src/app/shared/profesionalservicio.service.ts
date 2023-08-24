import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Profesional } from '../models/profesional';
@Injectable({
  providedIn: 'root'
})
export class ProfesionalservicioService {
  public usuario:Profesional;
  public uno=false;
  public nombre:String;
  public modal=false;
  

  constructor(private http:HttpClient) {

   }
  add(nombre:String,apellido:String,email:String,url:String){
    console.log("hollaaaaaaa");
    
    this.usuario={nombre:nombre,apellido:apellido,email:email,url:url};
    let api="http://localhost:3500/profesional";
    return this.http.post(api,this.usuario);
  }
  mostrar(){
    let api="http://localhost:3500/profesional";
    return this.http.get(api);
  }
  buscar(nombre:String){
    this.uno=true;
    this.nombre=nombre;
    let api="http://localhost:3500/profesional"+"/"+nombre;
    return this.http.get(api);
  }
  modificar(nombre:String,apellido:String,email:String,url:String){
    
    
    this.usuario={nombre:nombre,apellido:apellido,email:email,url:url};
    let api="http://localhost:3500/profesional";
    this.modal=true;
    return this.http.put(api,this.usuario);
  }
  



}

