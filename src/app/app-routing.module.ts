import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FilterDataComponent } from './component/filter-data/filter-data.component';
import { FirstComponent } from './component/first/first.component';
import { AboutComponent } from './component/NAV-BAR/about/about.component';
import { ContactComponent } from './component/NAV-BAR/contact/contact.component';
import { HomeComponent } from './component/NAV-BAR/home/home.component';
import { UserComponent } from './component/NAV-BAR/user/user.component';
import { TableComponent } from './component/table/table.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { FormArray } from '@angular/forms';
import { FormArrayComponent } from './component/form-array/form-array.component';
import { MediaQueryComponent } from './component/media-query/media-query.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: '', component: FirstComponent },
  { path: 'first', component: FirstComponent },
  { path: 'table', component: TableComponent },
  { path: 'filterdata', component: FilterDataComponent },
  { path: 'user', component: UserComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'databinding', component: DataBindingComponent },
  { path: 'form', component: FormArrayComponent },
  { path: 'media', component: MediaQueryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
