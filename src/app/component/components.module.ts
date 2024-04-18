import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicomponenteComponent } from './micomponente/micomponente.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [MicomponenteComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MicomponenteComponent
  ]
})
export class ComponentsModule { }
