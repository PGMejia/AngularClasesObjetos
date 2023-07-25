import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalleEmpleadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
