import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { UserPageComponent } from './components/user-page/user-page.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { HeaderComponent } from './components/header/header.component';
import {PostService} from './services/post.service';
import {UserService} from './services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
const routes: Routes = [
  {path: 'users', component: UserPageComponent, children: [
      {path: ':UserId', component: UserComponent}
    ] },
  {path: 'posts', component: PostPageComponent, children: [
      {path: ':UserId', component: PostComponent}
    ] }
  ];
@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    PostPageComponent,
    UserComponent,
    PostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [PostService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
