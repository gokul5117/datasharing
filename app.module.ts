import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { DirectiveDirective } from './directive.directive';
import { HostbindingDirective } from './hostbinding.directive';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    DirectiveDirective,
    HostbindingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
