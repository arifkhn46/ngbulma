import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { HomeComponent } from './components/home/home.component';

export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [HomeBannerComponent, HomeComponent]
})
export class HomeModule { }
