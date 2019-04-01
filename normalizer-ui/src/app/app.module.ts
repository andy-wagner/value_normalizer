import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFileComponent } from './upload/upload-file.component';
import { LocalMergeComponent } from './merge/local-merge.component';
import { ColumnDataComponent } from './merge/column-data.component';
import { GlobalMergeComponent } from './merge/global-merge.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ng2-cookies';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    LocalMergeComponent,
    GlobalMergeComponent,
    ColumnDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
