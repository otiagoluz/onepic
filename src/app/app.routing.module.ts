import { AuthGuard } from './core/auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotoDetailsComoponent } from './photos/photo-details/photo-details.component';



const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },

  { path: 'home', loadChildren: () => 
    import('./home/home.module')
      .then(h => h.HomeModule)
  },

  { path: 'user/:userName', component: PhotoListComponent, 
    resolve: { photos: PhotoListResolver } 
  },

  { path: 'p/add', component: PhotoFormComponent, canActivate: [AuthGuard] },

  { path: 'p/:photoId', component: PhotoDetailsComoponent },

  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
