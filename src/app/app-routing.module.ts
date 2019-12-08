import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {ClientcreationComponent} from './clientcreation/clientcreation.component';
import {ClientreadComponent} from './clientread/clientread.component';
import {ClientupdateComponent} from './clientupdate/clientupdate.component';
import {ClientdeleteComponent} from './clientdelete/clientdelete.component';
const routes: Routes = [{path:'accueil',component:AccueilComponent},
{path:'clientcreation',component:ClientcreationComponent},
{path:'clientupdate',component:ClientupdateComponent},
{path:'clientread',component:ClientreadComponent},
{path:'clientdelete',component:ClientdeleteComponent},
{path:'',redirectTo:'accueil',pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
