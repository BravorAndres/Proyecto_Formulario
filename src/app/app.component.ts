import { Component } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';
import { MostrarInformacionComponent } from './mostrar-informacion/mostrar-informacion.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class AppComponent {}