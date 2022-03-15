import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardMatComponent } from './dashboard-mat/dashboard-mat.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule} from '@angular/material/progress-bar'
import { MatSlideToggle} from '@angular/material/slide-toggle'
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeComponent } from './mat-tree/mat-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardComponent } from './mat-card/mat-card.component';
import { MatAutoCompleteComponent } from './mat-auto-complete/mat-auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MatTableComponent,
    DashboardMatComponent,
    MatTreeComponent,
    MatCardComponent,
    MatAutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatSlideToggle,
    MatProgressBarModule,
    MatMenuModule,
    MatTreeModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
