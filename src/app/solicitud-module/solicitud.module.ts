import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //para los formularios
import { SolicitudRoutingModule } from './solicitud-routing.module';
import { SolicitudCrearComponent } from './solicitud-crear/solicitud-crear.component';
import { SolicitudProtectoraComponent } from './solicitud-protectora/solicitud-protectora.component';
import { SolicitudComponent } from './solicitud.component';
import { SolicitudDetailEditarModalComponent } from './solicitud-detail-editar-modal/solicitud-detail-editar-modal.component';




@NgModule({
  declarations: [
    SolicitudComponent,
    SolicitudCrearComponent,
    SolicitudProtectoraComponent,
    SolicitudDetailEditarModalComponent
  ],
  imports: [
    BrowserModule,
    SolicitudRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SolicitudCrearComponent,
  ]

})
export class SolicitudModule { } //esto se cambia

