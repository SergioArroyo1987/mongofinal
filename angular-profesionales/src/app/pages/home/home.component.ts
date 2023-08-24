import { Component } from '@angular/core';
import { Profesional } from 'src/app/models/profesional';
import { ProfesionalservicioService } from 'src/app/shared/profesionalservicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
   comprobar:boolean;
  constructor(public servicio:ProfesionalservicioService){
    this.comprobar=true;
  }
  enviar(nombre:String,apellido:String,email:String,url:String){
    
    this.servicio.add(nombre,apellido,email,url).subscribe(()=>{

    });
  }
  buscar(){
    let nombre=prompt("Introduzca el nombre");
    this.servicio.buscar(nombre).subscribe((resultado:Profesional[])=>{
      let datos=resultado;
      console.log(datos);
      return datos;})

  }
  mostrar(){
    this.servicio.mostrar().subscribe((resultado:Profesional[])=>{
      let datos=resultado;
      console.log(datos);
      return datos;
      
    })
  }
  modificar(nombre:String,apellido:String,email:String,url:String){
    
    this.servicio.modificar(nombre,apellido,email,url).subscribe((datos)=>{
      let llave="modifiedCount";
      let numero=datos[llave];
      
        alert("datos modificados:"+numero);
      
      
    })
  
    
}}
