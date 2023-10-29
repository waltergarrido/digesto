import { Component } from '@angular/core';

@Component({
  selector: 'app-form-carga',
  templateUrl: './form-carga.component.html',
  styleUrls: ['./form-carga.component.css']
})
export class FormCargaComponent {
   public tipos= [];
   public seleccion:any ='seleccionar' ;
  DigestoCategoria=[
    {nombre:'Actividad de los Administrados',
    tipos:['Actividades Diversas'
      ,'Comercio'
      ,'Comercio De Productos Alimenticios'
      ,'Espectáculos'
      ,'Habilitaciones E Inspecciones'
      ,'Industria'
      ,'Industria Y Comercio De Productos Alimenticios'
      ,'Moralidad'
      ,'Sanidad Y Educación'
     ]},
     {nombre:'Actividad Económica Financiera',
    tipos:['Administración De Propiedades'
      ,'Concesiones'
      ,'Contabilidad'
      ,'Contrataciones'
      ,'Finanzas'
      ,'Patrimonio'
      ,'Permisos'
      ,'Rentas'
      ,'Tesoro Municipal'
     ]},

  ]

  
  ngOnInit() {
   
  }

  subCat(){
   this.tipos=this.seleccion.tipos;  
  }
}
