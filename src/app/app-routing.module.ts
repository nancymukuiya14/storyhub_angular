import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogpostComponent } from './blogpost/blogpost.component';

const routes: Routes = [{ path: '', redirectTo: 'blog', pathMatch: 'full' }, {
  path: '', component: BlogpostComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
