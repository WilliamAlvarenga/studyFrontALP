import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { AuthGuard } from './core/auth/auth.guard';



const routers: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'p/:photoId',
    component: PhotoDetailsComponent,
    canActivate: [AuthGuard]
  },
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routers)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
