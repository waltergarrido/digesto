import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCargaComponent } from './form-carga/form-carga.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCargaComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
