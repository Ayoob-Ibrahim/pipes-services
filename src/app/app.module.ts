import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './component/first/first.component';
import { TableComponent } from './component/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipesPipe } from './PIPESCONCEPT/filter-pipes.pipe';
import { SubstrPipesPipe } from './PIPESCONCEPT/substr-pipes.pipe';
import { FilterDataComponent } from './component/filter-data/filter-data.component';
import { UserfilterPipe } from './PIPESCONCEPT/filter/userfilter.pipe';
import { AboutComponent } from './component/NAV-BAR/about/about.component';
import { UserComponent } from './component/NAV-BAR/user/user.component';
import { ContactComponent } from './component/NAV-BAR/contact/contact.component';
import { HomeComponent } from './component/NAV-BAR/home/home.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { TestComComponent } from './component/test-com/test-com.component';
import { FormArrayComponent } from './component/form-array/form-array.component';
import { MediaQueryComponent } from './component/media-query/media-query.component';
import { StandaloneComponent } from './component/standalone/standalone.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TableComponent,
    FilterPipesPipe,
    SubstrPipesPipe,
    FilterDataComponent,
    UserfilterPipe,
    AboutComponent,
    UserComponent,
    ContactComponent,
    HomeComponent,
    DataBindingComponent,
    TestComComponent,
    FormArrayComponent,
    MediaQueryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StandaloneComponent


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
