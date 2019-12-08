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
import { CompteupdateComponent } from './compteupdate/compteupdate.component';
import { ComptedeleteComponent } from './comptedelete/comptedelete.component';
import { CompteafficheComponent } from './compteaffiche/compteaffiche.component';
import { CompteaddComponent } from './compteadd/compteadd.component';
import { OperationComponent } from './operation/operation.component';
import { VerserComponent } from './verser/verser.component';
import { RetirerComponent } from './retirer/retirer.component';
import { VirementComponent } from './virement/virement.component';
import { AlloperationComponent } from './alloperation/alloperation.component';
import { GroupcreateComponent } from './groupcreate/groupcreate.component';
import { GroupreadComponent } from './groupread/groupread.component';
import { GroupupdateComponent } from './groupupdate/groupupdate.component';
import { GroupdeleteComponent } from './groupdelete/groupdelete.component';

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
    CompterechercherComponent,
    CompteupdateComponent,
    ComptedeleteComponent,
    CompteafficheComponent,
    CompteaddComponent,
    OperationComponent,
    VerserComponent,
    RetirerComponent,
    VirementComponent,
    AlloperationComponent,
    GroupcreateComponent,
    GroupreadComponent,
    GroupupdateComponent,
    GroupdeleteComponent
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
