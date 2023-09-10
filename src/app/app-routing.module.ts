import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:'',redirectTo:'about',pathMatch:'full'},
  {path:'about',component:AboutComponent,title:"About Component"},
  {path:'contact',component:ContactComponent, title:"Contact Component"},
  {path:'portfolio',component:PortfolioComponent, title:"Portfolio Component"},

  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
