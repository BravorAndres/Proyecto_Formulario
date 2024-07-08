import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter,RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { FormularioComponent } from "./app/formulario/formulario.component";
import { MostrarInformacionComponent } from "./app/mostrar-informacion/mostrar-informacion.component";
import { importProvidersFrom } from "@angular/core";


const routes: Routes = [
  {path: '',component: FormularioComponent},
  {path: 'mostrar-informacion',component: MostrarInformacionComponent}
  
];

bootstrapApplication(AppComponent,{
  providers:[
    provideRouter(routes),
  ]
}).catch(err => console.error(err))

