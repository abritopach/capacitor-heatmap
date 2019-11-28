import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'heatmap-over-iframe',
    loadChildren: () => import('./heatmap-over-iframe/heatmap-over-iframe.module').then( m => m.HeatmapOverIframePageModule)
  },
  {
    path: 'heatmap-over-img',
    loadChildren: () => import('./heatmap-over-img/heatmap-over-img.module').then( m => m.HeatmapOverImgPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
