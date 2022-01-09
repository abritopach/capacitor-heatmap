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
  {
    path: 'google-maps-heatmap',
    loadChildren: () => import('./google-maps-heatmap/google-maps-heatmap.module').then( m => m.GoogleMapsHeatmapPageModule)
  },
  {
    path: 'leaflet-maps-heatmap',
    loadChildren: () => import('./leaflet-maps-heatmap/leaflet-maps-heatmap.module').then( m => m.LeafletMapsHeatmapPageModule)
  },
  {
    path: 'mapbox-maps-heatmap',
    loadChildren: () => import('./mapbox-maps-heatmap/mapbox-maps-heatmap.module').then( m => m.MapboxMapsHeatmapPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
