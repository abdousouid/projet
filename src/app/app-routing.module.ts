import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {ClientcreationComponent} from './clientcreation/clientcreation.component';
import {ClientreadComponent} from './clientread/clientread.component';
import {ClientupdateComponent} from './clientupdate/clientupdate.component';
import {ClientdeleteComponent} from './clientdelete/clientdelete.component';
import {EmpcreerComponent}from './empcreer/empcreer.component';
import{EmpdeletComponent}from './empdelet/empdelet.component';
import{EmpreadComponent}from './empread/empread.component';
import{EmpupdateComponent}from './empupdate/empupdate.component';
import {CompterechercherComponent} from './compterechercher/compterechercher.component';


const routes: Routes = [{path:'accueil',component:AccueilComponent},
{path:'clientcreation',component:ClientcreationComponent},
{path:'compterechercher',component:CompterechercherComponent},
{path:'clientupdate',component:ClientupdateComponent},
{path:'clientread',component:ClientreadComponent},
{path:'clientdelete',component:ClientdeleteComponent},
{path:'empcreer',component:EmpcreerComponent},
{path:'empdelet',component:EmpdeletComponent},
{path:'empupdate',component:EmpupdateComponent},
{path:'empread',component:EmpreadComponent},

{path:'',redirectTo:'accueil',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
