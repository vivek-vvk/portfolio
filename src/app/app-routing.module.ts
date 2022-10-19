import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {path:'',component:LandingpageComponent},
{path:'about',component:AboutComponent},
{path:'sample',component:SampleComponent},
{path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
