import { Component } from '@angular/core';
import {FormDigesto} from './form-digesto.model';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'

// or via CommonJS

@Component({
  selector: 'app-form-carga',
  templateUrl: './form-carga.component.html',
  styleUrls: ['./form-carga.component.css']
})
export class FormCargaComponent {
  
  public numeroOrdenanza:number=0;
  aux=false;
  digestos = [
    {
      nOrdenanza: 'ORD001',
      estado: 'Vigente',
      categoria: 'Actividad de los Administrados',
      tipo: 'Comercio',
      palabrasClave: ['keyword1', 'keyword2'],
      fecha: '2023-04-01',
      descripcion: 'Descripción del formulario 1',
      file: 'archivo1.pdf'
    },
    {
      nOrdenanza: 'ORD002',
      estado: 'No Vigente',
      categoria: 'Actividad Económica Financiera',
      tipo: 'Concesiones',
      palabrasClave: ['keyword3', 'keyword4'],
      fecha: '2023-04-02',
      descripcion: 'Descripción del formulario 2',
      file: 'archivo2.pdf'
    },
    {
      nOrdenanza: 'ORD003',
      estado: 'Vigente',
      categoria: 'Actividad Económica Financiera',
      tipo: 'Concesiones',
      palabrasClave: ['keyword5', 'keyword6'],
      fecha: '2023-04-03',
      descripcion: 'Descripción del formulario 3',
      file: 'archivo3.pdf'
    }
  ];
   formulario ={
    nOrdenanza: '',
    estado:'',
    categoria: '',
    tipo: '',
    palabrasClave:[],
    fecha: '',
    descripcion: '',
    file: ''
   }
   opcionesEstado = ['Vigente', 'No vigente', 'Ambos'];
  
 
  
  tags: string[] = [];
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

  constructor(private http: HttpClient,
   ) {}
  ngOnInit() {
  
   
  }

  subCat(){
   this.tipos = this.seleccion.tipos;  
   this.formulario.categoria=this.seleccion.nombre;
  }


  onSubmit() {
    const formData = new FormData();
    formData.append('descripcion', this.formulario.descripcion);
    formData.append('file', this.formulario.file);
    Swal.fire({
      title: "¿Esta seguro de guardar el digesto?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `No guardar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
   console.log(this.formulario);
   // Reemplaza la URL con la dirección a la que deseas enviar la solicitud
    //const apiUrl = ''
   //Realiza la solicitud HTTP
    //this.http.post(apiUrl, formData).subscribe(
      //(response) => {
        this.digestos.push(this.formulario);
        Swal.fire("Guardado!", "", "success");
        this.formulario={
          nOrdenanza: '',
          estado:'',
          categoria: '',
          tipo: '',
          palabrasClave:[],
          fecha: '',
          descripcion: '',
          file: ''
         }
         this.seleccion='';
      //},
      //(error) => {
     
      //}
    //);

      } else if (result.isDenied) {
        Swal.fire("Los cambios no se guardaron", "", "info");
        this.formulario.categoria='';
        this.formulario.descripcion='';
        this.formulario.estado='';
        this.formulario.nOrdenanza='';

      }
    });
  
  }

  verboton(){
this.aux=true;

  }


}
