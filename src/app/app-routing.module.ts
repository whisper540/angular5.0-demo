import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { VesselComponent } from './components/vessel/vessel.component';
import { Page404Component } from './components/page404/page404.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { SearchComponent } from './components/archives/subs/search/search.component';
import { CreateComponent } from './components/archives/subs/create/create.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { name: 'login!' } },
  { path: 'vessel', component: VesselComponent, data: { name: 'vessel!' },
    children: [
      { path: 'archives', component: ArchivesComponent, data: { name: 'archives!' },
        children: [
          { path: 'search', component: SearchComponent, data: { name: 'search!' } },
          { path: 'create', component: CreateComponent, data: { name: 'create!' } },
          { path: '', redirectTo: '/vessel/archives/search', pathMatch: 'full' }
        ]
      },
      // 四个子路由用懒加载方式加载
      // { path: 'archives', loadChildren: './components/archives/archives.module#ArchivesModule' },
      // { path: 'evaluation', loadChildren: './components/evaluation/evaluation.module#EvaluationModule' },
      // { path: 'train', loadChildren: './components/train/train.module#TrainModule' },
      // { path: 'indent', loadChildren: './components/indent/indent.module#IndentModule' },
      { path: '', redirectTo: '/vessel/archives/search', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
