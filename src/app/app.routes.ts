import { Routes } from "@angular/router";
import { FormularioComponent } from "./formulario/formulario.component";
import { AppComponent } from "./app.component";
import { MostrarInformacionComponent } from "./mostrar-informacion/mostrar-informacion.component";


export const routes: Routes = [
    { path: '', component: FormularioComponent },
    { path: 'mostrar-informacion',component:MostrarInformacionComponent}
];


