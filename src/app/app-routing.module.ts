import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppComponent } from './app.component';
import { FeedPostesComponent } from './feed-postes/feed-postes.component';
import { PostesDetailComponent } from './postes-detail/postes-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },  
  { path: 'feed', component: FeedPostesComponent },
  { path: 'detail/:id', component: PostesDetailComponent },
  { path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }