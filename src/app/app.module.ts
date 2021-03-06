import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { routing, appRoutingProviders } from './app.routing';

// Modulos

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { GestionarPublicacionesComponent } from './components/gestionar-publicaciones/gestionar-publicaciones.component';
import { GestionarMedicosComponent } from './components/gestionar-medicos/gestionar-medicos.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { TerminosYCondicionesComponent } from './components/terminos-y-condiciones/terminos-y-condiciones.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarCitaComponent } from './components/buscar-cita/buscar-cita.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { OrdenLlegadaComponent } from './components/orden-llegada/orden-llegada.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CalendarioCitasComponent } from './components/calendario-citas/calendario-citas.component';
import { GestionarCitasComponent } from './components/gestionar-citas/gestionar-citas.component';
import { AprobarPublicacionesComponent } from './components/aprobar-publicaciones/aprobar-publicaciones.component';
import { ContactenosRootComponent } from './components/contactenos-root/contactenos-root.component';
import { SlidersRootComponent } from './components/sliders-root/sliders-root.component';
import { ListadoPacientesComponent } from './components/listado-pacientes/listado-pacientes.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { VerPerfilMedicoComponent } from './components/ver-perfil-medico/ver-perfil-medico.component';
import { CrearPublicacionComponent } from './components/crear-publicacion/crear-publicacion.component';
import { DiagnosticoComponent } from './components/diagnostico/diagnostico.component';
import { ModalComponent } from './components/modal/modal.component';
import { VisiometriaComponent } from './components/visiometria/visiometria.component';

// Servicios
import { ProvedorService } from './services/provedor.service';
import { Global } from './services/global';
import { UserService } from './services/user.service';
import { UserGuard } from './services/user.guard';
import { SucursalService } from './services/sucursales.service';
import { UserAdmin } from './services/user_admin.guard';
import { UserMedico } from './services/user_medico.guard';
import { UserSucursal } from './services/user_sucursal.guard';
import { SucursalMedico } from './services/sucursal_medico.guard';

// Modulo de loader
import { NgxLoadingModule } from 'ngx-loading';


// Pipes
import { FechaPipe } from './pipes/fechas.pipe';
import { HoraPipe } from './pipes/horas.pipe';
import { CategoriaPipe } from './pipes/categoria.pipe';
import { AmPmPipe } from './pipes/ampm.pipe';
import { BusquedaPipe } from './pipes/busqueda.pipe';

// Angular material

import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
        MatAutocompleteModule, MatRadioModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';

// Calendario

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
// import { MedicoService } from './services/medico.service';
import { MisServiciosComponent } from './components/mis-servicios/mis-servicios.component';
import { OlvidoContraseniaComponent } from './components/olvido-contrasenia/olvido-contrasenia.component';
import { ConfirmarCuentaComponent } from './components/confirmar-cuenta/confirmar-cuenta.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localeEs);

// recarga
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HistoriaClinicaComponent } from './components/historia-clinica/historia-clinica.component';
import { HistorialCitasMedicoComponent } from './components/historial-citas-medico/historial-citas-medico.component';
import { GestionarSucursalesComponent } from './components/gestionar-sucursales/gestionar-sucursales.component';
import { CrearSucursalComponent } from './components/crear-sucursal/crear-sucursal.component';
import { ConsultorioComponent } from './components/consultorio/consultorio.component';

// recorte imagenes
import { ImageCropperModule } from 'ngx-image-cropper';
import { GestionarConsultoriosComponent } from './components/gestionar-consultorios/gestionar-consultorios.component';
import { PanelAdministradorComponent } from './components/panel-administrador/panel-administrador.component';
import { HistoriaGeneralComponent } from './components/historia-general/historia-general.component';
import { HistoriaOptometriaComponent } from './components/historia-optometria/historia-optometria.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { HstGeneralComponent } from './components/hst-general/hst-general.component';
import { DiagnosticoService } from './services/diagnostico.service';

// search selected
// import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    GestionarPublicacionesComponent,
    GestionarMedicosComponent,
    ContactenosComponent,
    TerminosYCondicionesComponent,
    HomeComponent,
    BuscarCitaComponent,
    SlidersComponent,
    OrdenLlegadaComponent,
    PerfilComponent,
    CalendarioCitasComponent,
    GestionarCitasComponent,
    AprobarPublicacionesComponent,
    ContactenosRootComponent,
    SlidersRootComponent,
    ListadoPacientesComponent,
    BarraNavegacionComponent,
    FooterComponent,
    VerPerfilMedicoComponent,
    FechaPipe,
    HoraPipe,
    CategoriaPipe,
    BusquedaPipe,
    AmPmPipe,
    CrearPublicacionComponent,
    MisServiciosComponent,
    OlvidoContraseniaComponent,
    ConfirmarCuentaComponent,
    HistoriaClinicaComponent,
    HistorialCitasMedicoComponent,
    GestionarSucursalesComponent,
    CrearSucursalComponent,
    ConsultorioComponent,
    GestionarConsultoriosComponent,
    PanelAdministradorComponent,
    HistoriaGeneralComponent,
    HistoriaOptometriaComponent,
    BarraLateralComponent,
    HstGeneralComponent,
    DiagnosticoComponent,
    ModalComponent,
    VisiometriaComponent

  ],
  imports: [
    BrowserModule,
    // Search Selected
    // NgxMatSelectSearchModule,
    ImageCropperModule,
    // routing,
    RouterModule,
    // appRoutingProviders,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule, MatInputModule,
    MatAutocompleteModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    BrowserAnimationsModule,
    NgxLoadingModule.forRoot({}),
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,

    }),
    FormsModule,
    FlatpickrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    // appRoutingProviders,
    ProvedorService,
    UserGuard,
    UserService,
    SucursalService,
    UserAdmin,
    UserMedico,
    UserSucursal,
    SucursalMedico,
    Global,
    DiagnosticoService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
