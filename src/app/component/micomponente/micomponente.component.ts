import { Component, OnInit } from '@angular/core';
import { MiServicioService } from 'src/app/service/mi-servicio.service';

@Component({
  selector: 'app-micomponente',
  templateUrl: './micomponente.component.html',
  styleUrls: ['./micomponente.component.scss'],
})
export class MicomponenteComponent  implements OnInit {

  miVariable: any[] = [];
  miSubject: any;

  constructor(private miServicio: MiServicioService ) {
    this.miSubject = this.miServicio.getInformacion();
  }

  ngOnInit() {}

  suma(num1: number, num2: number){
    return num1 + num2;
  }

}
