import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { CrudComponent } from './pages/crud/crud.component';
import { ConvocatoriasComponent } from './pages/convocatorias/convocatorias.component';
import { ReconocimientosComponent } from './pages/reconocimientos/reconocimientos.component';
import { FormsModule } from '@angular/forms';


const routes: Routes =[
  {path: "register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:"inicio",component:InicioComponent},
  {path:"convocatorias", component:ConvocatoriasComponent},
  {path:"crud", component:CrudComponent},
  {path:"equipos",component:EquiposComponent},
  {path:"reconocimientos", component:ReconocimientosComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    InicioComponent,
    LoginComponent,
    RegisterComponent,
    EquiposComponent,
    CrudComponent,
    ConvocatoriasComponent,
    ReconocimientosComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
