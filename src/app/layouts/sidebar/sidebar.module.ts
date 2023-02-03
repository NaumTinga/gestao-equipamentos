import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {RouterModule} from "@angular/router";
import {SidebarComponent} from "./sidebar.component";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [SidebarComponent]
})
export class SidebarModule { }
