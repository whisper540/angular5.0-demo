import { BrowserModule } from '@angular/platform-browser'; /*BrowserModule，浏览器解析的模块*/
import { NgModule } from '@angular/core'; /*angualrjs核心模块*/
import { FormsModule } from '@angular/forms'; /*表单数据绑定 表单验证需要的模块*/
// import { HttpModule } from '@angular/http'; /*a;jax模块*/
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; /*拦截器和ajax模块*/
import { AppRoutingModule } from './app-routing.module'; /*路由模块*/
// import { ArchivesModule } from './components/archives/archives.module'; /*子路由模块*/
// import { EvaluationModule } from './components/evaluation/evaluation.module'; /*子路由模块*/
// import { TrainModule } from './components/train/train.module'; /*子路由模块*/
// import { IndentModule } from './components/indent/indent.module'; /*子路由模块*/
// 主模块引入
import { AppComponent } from './app.component';
// 自定义模块引入
import { LoginComponent } from './components/login/login.component';
import { VesselComponent } from './components/vessel/vessel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page404Component } from './components/page404/page404.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { SearchComponent } from './components/archives/subs/search/search.component';
import { CreateComponent } from './components/archives/subs/create/create.component';
// import { TrainComponent } from './components/train/train.component';
// import { IndentComponent } from './components/indent/indent.component';
// import { EvaluationComponent } from './components/evaluation/evaluation.component;

import { InterceptorService } from './services/Interceptor.service'; /*自定义拦截器*/
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [ /*引入当前项目运行组件*/
    AppComponent,
    LoginComponent,
    VesselComponent,
    ArchivesComponent,
    SearchComponent,
    CreateComponent,
    Page404Component,
    HeaderComponent,
    FooterComponent
    // EvaluationComponent,
    // TrainComponent,
    // IndentComponent,
  ],
  imports: [ /*引入当前模块运行依赖的其他模块*/
    BrowserModule,
    FormsModule,
    // HttpModule,
    HttpClientModule,
    // ArchivesModule,
    // EvaluationModule,
    // TrainModule,
    // IndentModule,
    AppRoutingModule
  ],
  providers: [ /*定义的服务 回头放在这个里面*/
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    LoginService
  ],
  bootstrap: [AppComponent] /* 指定应用的主视图（称为根组件） 通过引导根AppModule来启动应用 ，这里一般写的是根组件*/
})

/*根模块不需要导出任何东西， 因为其它组件不需要导入根模块。 但是一定要写*/
export class AppModule { }
