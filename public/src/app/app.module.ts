import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/header/app-header.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { AppFooterComponent } from './components/footer/footer.component';
import { DrawsComponent } from './components/app-main/table/draws.component';
import { AppMainInputComponent } from './components/app-main/input/input.component';
import { RowComponent } from './components/app-main/matrix/row.component';
import { OutputComponent } from './components/app-main/wins/output.component';
import { NumbersComponent } from './components/app-main/savedNumbers/numbers.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppFooterComponent,
    DrawsComponent,
    AppMainInputComponent,
    RowComponent,
    OutputComponent,
    NumbersComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
