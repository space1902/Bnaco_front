import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent} from './components/search-box/search-box.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { VisualizePageComponent } from './pages/visualize-page/visualize-page.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    SearchBoxComponent,
    EditPageComponent,
    VisualizePageComponent,
    CreatePageComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class SharedModule { }
