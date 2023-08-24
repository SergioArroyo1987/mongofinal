import { Component } from '@angular/core';
import { ProfesionalservicioService } from 'src/app/shared/profesionalservicio.service';
import { Profesional } from 'src/app/models/profesional';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent {
  datos:Profesional[]=[];
  

  constructor(public servicio:ProfesionalservicioService){
    
     if(servicio.uno==false){
      this.servicio.mostrar().subscribe((resultado:Profesional[])=>{
       this. datos=resultado;
        console.log(this.datos);
        
        
      })}else{
        this.servicio.buscar(servicio.nombre).subscribe((resultado:Profesional[])=>{
          this. datos=resultado;
           console.log(this.datos);

      })}
    

    }
    

  }


