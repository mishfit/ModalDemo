import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ModalComponent, ModalContent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalContent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
    { path: '', component: ModalComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalContent]
})
export class AppModule {
  constructor (private injector: Injector) {
    const customElement = createCustomElement(ModalComponent, { injector });

    window.customElements.define('modal-demo', customElement);
  }

  ngDoBootstrap () { }
}
