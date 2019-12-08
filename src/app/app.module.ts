import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientcreationComponent } from './clientcreation/clientcreation.component';
import { ClientreadComponent } from './clientread/clientread.component';
import { ClientupdateComponent } from './clientupdate/clientupdate.component';
import { ClientdeleteComponent } from './clientdelete/clientdelete.component';
import { EmpcreerComponent } from './empcreer/empcreer.component';
import { EmpajoutComponent } from './empajout/empajout.component';
import { EmpdeletComponent } from './empdelet/empdelet.component';
import { EmpupdateComponent } from './empupdate/empupdate.component';
import { EmpreadComponent } from './empread/empread.component';
import { CompterechercherComponent } from './compterechercher/compterechercher.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ClientcreationComponent,
    ClientreadComponent,
    ClientupdateComponent,
    ClientdeleteComponent,
    EmpcreerComponent,
    EmpajoutComponent,
    EmpdeletComponent,
    EmpupdateComponent,
    EmpreadComponent,
    CompterechercherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
