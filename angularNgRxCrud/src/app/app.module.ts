import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { Header } from "./components/shared/header.component";
import { Footer } from "./components/shared/footer.component";
import { PageNotFoundComponent } from './components/shared/page-not-found.component';

/* Feature Modules */
import { UserModule } from '../app/components/users/user.module';
import { StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    UserModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'debug',
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  declarations: [
    AppComponent,
    Header, Footer,
    PageNotFoundComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
