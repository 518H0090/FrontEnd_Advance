// When create new components it automatically add in module

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AssociateComponent } from './associate/associate.component';

// import module tu login module
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerComponent,
    SupplierComponent,
    AssociateComponent,
  ],
  // import module tu login module
  imports: [BrowserModule, AppRoutingModule, LoginModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
