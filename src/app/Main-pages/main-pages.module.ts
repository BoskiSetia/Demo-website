import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPagesRoutingModule } from './main-pages-routing.module';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookingComponent } from './booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    GalleryComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    MainPagesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MainPagesModule { }
