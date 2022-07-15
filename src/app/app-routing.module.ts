import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppcourseComponent } from './appcourse/appcourse.component';


const routes: Routes = [{path:"",component:AppcourseComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
