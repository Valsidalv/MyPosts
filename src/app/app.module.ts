import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AtomSpinnerModule } from 'angular-epic-spinners'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostSearchComponent } from './post-search/post-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AtomSpinnerModule,
    InfiniteScrollModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'posts', component: PostListComponent },
      { path: 'search', component: PostSearchComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
